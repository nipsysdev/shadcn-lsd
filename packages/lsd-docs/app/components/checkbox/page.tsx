'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox as LSDCheckbox,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

export default function CheckboxPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Checkbox
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          A checkbox component that allows users to select one or more options
          from a set.
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
          code={`import { Checkbox } from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample
          title="Basic checkbox"
          code={`<div className="flex items-center space-x-(--lsd-spacing-small)">
  <Checkbox id="default-checkbox" />
  <label htmlFor="default-checkbox">Accept terms and conditions</label>
</div>`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Default Checkbox
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          A basic checkbox with a label. Always provide an{' '}
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
          title="Default checkbox"
          code={`<div className="flex items-center space-x-(--lsd-spacing-small)">
  <Checkbox id="default-checkbox" />
  <label htmlFor="default-checkbox">Accept terms and conditions</label>
</div>`}
        >
          <div className="flex items-center space-x-(--lsd-spacing-small)">
            <LSDCheckbox id="default-checkbox" />
            <label htmlFor="default-checkbox">
              Accept terms and conditions
            </label>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Controlled Checkbox
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
          props to control the checkbox state.
        </Typography>

        <ComponentPreview
          title="Controlled checkbox"
          code={`function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  
  return (
    <div className="flex items-center space-x-(--lsd-spacing-small)">
      <Checkbox
        id="controlled-checkbox"
        checked={checked}
        onCheckedChange={(value) => setChecked(!!value)}
      />
      <label htmlFor="controlled-checkbox">
        Checkbox is {checked ? 'checked' : 'unchecked'}
      </label>
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-(--lsd-spacing-small)">
            <LSDCheckbox id="controlled-checkbox" />
            <label htmlFor="controlled-checkbox">Checkbox is unchecked</label>
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
          code={`<div className="flex items-center space-x-(--lsd-spacing-small)">
  <Checkbox id="default-checked" defaultChecked />
  <label htmlFor="default-checked">Pre-checked option</label>
</div>`}
        >
          <div className="flex items-center space-x-(--lsd-spacing-small)">
            <LSDCheckbox id="default-checked" defaultChecked />
            <label htmlFor="default-checked">Pre-checked option</label>
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
          prop to disable the checkbox.
        </Typography>

        <ComponentPreview
          title="Disabled state"
          code={`<div className="space-y-(--lsd-spacing-base)">
  <div className="flex items-center space-x-(--lsd-spacing-small)">
    <Checkbox id="disabled-unchecked" disabled />
    <label htmlFor="disabled-unchecked">Disabled unchecked</label>
  </div>
  <div className="flex items-center space-x-(--lsd-spacing-small)">
    <Checkbox id="disabled-checked" disabled checked />
    <label htmlFor="disabled-checked">Disabled checked</label>
  </div>
</div>`}
        >
          <div className="space-y-(--lsd-spacing-base)">
            <div className="flex items-center space-x-(--lsd-spacing-small)">
              <LSDCheckbox id="disabled-unchecked" disabled />
              <label htmlFor="disabled-unchecked">Disabled unchecked</label>
            </div>
            <div className="flex items-center space-x-(--lsd-spacing-small)">
              <LSDCheckbox id="disabled-checked" disabled checked />
              <label htmlFor="disabled-checked">Disabled checked</label>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Multiple Checkboxes
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Group multiple checkboxes together to allow users to select multiple
          options.
        </Typography>

        <ComponentPreview
          title="Multiple checkboxes"
          code={`function MultipleCheckboxesExample() {
  const [checked, setChecked] = useState(true);
  
  return (
    <div className="space-y-(--lsd-spacing-base)">
      <div className="flex items-center space-x-(--lsd-spacing-small)">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={(value) => setChecked(!!value)}
        />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      <div className="flex items-center space-x-(--lsd-spacing-small)">
        <Checkbox id="newsletter" />
        <label htmlFor="newsletter">Subscribe to newsletter</label>
      </div>
      <div className="flex items-center space-x-(--lsd-spacing-small)">
        <Checkbox id="updates" />
        <label htmlFor="updates">Receive product updates</label>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-(--lsd-spacing-base)">
            <div className="flex items-center space-x-(--lsd-spacing-small)">
              <LSDCheckbox id="terms" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>
            <div className="flex items-center space-x-(--lsd-spacing-small)">
              <LSDCheckbox id="newsletter" />
              <label htmlFor="newsletter">Subscribe to newsletter</label>
            </div>
            <div className="flex items-center space-x-(--lsd-spacing-small)">
              <LSDCheckbox id="updates" />
              <label htmlFor="updates">Receive product updates</label>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Checkbox Group
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Organize related checkboxes in a group with a descriptive label.
        </Typography>

        <ComponentPreview
          title="Checkbox group"
          code={`<div className="space-y-(--lsd-spacing-small)">
  <p className="text-sm font-medium">Select your interests:</p>
  <div className="space-y-(--lsd-spacing-small) pl-(--lsd-spacing-small)">
    <div className="flex items-center space-x-(--lsd-spacing-small)">
      <Checkbox id="tech" />
      <label htmlFor="tech">Technology</label>
    </div>
    <div className="flex items-center space-x-(--lsd-spacing-small)">
      <Checkbox id="design" />
      <label htmlFor="design">Design</label>
    </div>
    <div className="flex items-center space-x-(--lsd-spacing-small)">
      <Checkbox id="business" />
      <label htmlFor="business">Business</label>
    </div>
  </div>
</div>`}
        >
          <div className="space-y-(--lsd-spacing-small)">
            <p className="text-sm font-medium">Select your interests:</p>
            <div className="space-y-(--lsd-spacing-small) pl-(--lsd-spacing-small)">
              <div className="flex items-center space-x-(--lsd-spacing-small)">
                <LSDCheckbox id="tech" />
                <label htmlFor="tech">Technology</label>
              </div>
              <div className="flex items-center space-x-(--lsd-spacing-small)">
                <LSDCheckbox id="design" />
                <label htmlFor="design">Design</label>
              </div>
              <div className="flex items-center space-x-(--lsd-spacing-small)">
                <LSDCheckbox id="business" />
                <label htmlFor="business">Business</label>
              </div>
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
              Checkbox Props
            </Typography>
            <div className="space-y-(--lsd-spacing-base)">
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
                  Required for accessibility. Associates the checkbox with its
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
                    (checked: boolean | "indeterminate") =&gt; void
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
                  Disables the checkbox.
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
                  Marks the checkbox as required.
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
                  Name of the checkbox (for form submission).
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
                  Value of the checkbox (for form submission).
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "on"
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
          Checkboxes follow WAI-ARIA guidelines and are fully accessible. Always
          provide an{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            id
          </code>{' '}
          and associate it with a label using the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            htmlFor
          </code>{' '}
          attribute. This ensures screen readers can properly announce the
          checkbox and its purpose.
        </Typography>
      </div>
    </div>
  );
}
