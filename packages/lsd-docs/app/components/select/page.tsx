'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button as LSDButton,
  Select as LSDSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
  { value: 'qwik', label: 'Qwik' },
];

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'zh', label: 'Chinese' },
];

export default function SelectPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Select
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          A select component that allows users to select from a list of options.
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
          code={`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample
          title="Basic select"
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frameworks</SelectLabel>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
      <SelectItem value="angular">Angular</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Basic Usage
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          A basic select with a placeholder and a list of options. Use{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            defaultValue
          </code>{' '}
          to set an initial value.
        </Typography>

        <ComponentPreview
          title="Basic select"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <div>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frameworks</SelectLabel>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
  <div>
    <Select defaultValue="react">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frameworks</SelectLabel>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <div>
              <LSDSelect>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frameworks</SelectLabel>
                    {frameworks.map((framework) => (
                      <SelectItem key={framework.value} value={framework.value}>
                        {framework.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </LSDSelect>
            </div>
            <div>
              <LSDSelect defaultValue="react">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frameworks</SelectLabel>
                    {frameworks.map((framework) => (
                      <SelectItem key={framework.value} value={framework.value}>
                        {framework.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </LSDSelect>
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
          prop on{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            SelectTrigger
          </code>{' '}
          to change the select size.
        </Typography>

        <ComponentPreview
          title="Select sizes"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <div>
    <h4 className="text-sm font-medium mb-(--lsd-spacing-smaller)">Default Size</h4>
    <Select>
      <SelectTrigger className="w-[180px]" size="default">
        <SelectValue placeholder="Default size" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
  <div>
    <h4 className="text-sm font-medium mb-(--lsd-spacing-smaller)">Small Size</h4>
    <Select>
      <SelectTrigger className="w-[180px]" size="sm">
        <SelectValue placeholder="Small size" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <div>
              <h4 className="text-sm font-medium mb-(--lsd-spacing-smaller)">
                Default Size
              </h4>
              <LSDSelect>
                <SelectTrigger className="w-[180px]" size="default">
                  <SelectValue placeholder="Default size" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </LSDSelect>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-(--lsd-spacing-smaller)">
                Small Size
              </h4>
              <LSDSelect>
                <SelectTrigger className="w-[180px]" size="sm">
                  <SelectValue placeholder="Small size" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </LSDSelect>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          With Groups and Separators
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            SelectGroup
          </code>{' '}
          to group related options and{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            SelectSeparator
          </code>{' '}
          to visually separate groups.
        </Typography>

        <ComponentPreview
          title="Select with groups and separators"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <div>
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frameworks</SelectLabel>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <div>
              <LSDSelect>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frameworks</SelectLabel>
                    {frameworks.map((framework) => (
                      <SelectItem key={framework.value} value={framework.value}>
                        {framework.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    {languages.map((language) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </LSDSelect>
            </div>
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
          prop to disable the select.
        </Typography>

        <ComponentPreview
          title="Disabled state"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <div>
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
  <div>
    <Select disabled defaultValue="react">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <div>
              <LSDSelect disabled>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Disabled select" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </LSDSelect>
            </div>
            <div>
              <LSDSelect disabled defaultValue="react">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Disabled select" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </LSDSelect>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          With Value Change Handler
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            onValueChange
          </code>{' '}
          prop to handle value changes.
        </Typography>

        <ComponentPreview
          title="With value change handler"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <div>
    <Select onValueChange={(value) => console.log('Selected:', value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <div>
              <LSDSelect
                onValueChange={(value) => console.log('Selected:', value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </LSDSelect>
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
              Select Props
            </Typography>
            <div className="space-y-4">
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
                  Controlled value of the select.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  defaultValue
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Initial value of the select (uncontrolled).
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  onValueChange
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    (value: string) =&gt; void
                  </code>
                  <br />
                  Callback when the selected value changes.
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
                  Disables the select.
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
                  Name of the select (for form submission).
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
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
                  Marks the select as required.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                </Typography>
              </div>
            </div>

            <Typography
              variant="h3"
              className="mb-(--lsd-spacing-base) mt-(--lsd-spacing-larger)"
            >
              SelectTrigger Props
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  size
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "default" | "sm"
                  </code>
                  <br />
                  Size of the select trigger.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "default"
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
                  Disables the select trigger.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                </Typography>
              </div>
            </div>

            <Typography
              variant="h3"
              className="mb-(--lsd-spacing-base) mt-(--lsd-spacing-larger)"
            >
              SelectItem Props
            </Typography>
            <div className="space-y-4">
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
                  Required. The value of the item.
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
                  Disables the item.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
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
          Selects follow WAI-ARIA guidelines and are fully accessible. The
          component uses proper ARIA roles and attributes to ensure screen
          readers can properly announce the select, its options, and the current
          selection. Keyboard navigation is fully supported with arrow keys,
          Enter, and Escape.
        </Typography>
      </div>
    </div>
  );
}
