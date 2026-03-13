'use client';

import {
  Card,
  CardContent,
  Tabs as LSDTabs,
  Separator,
  TabsContent,
  TabsList,
  TabsTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

export default function TabsPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Tabs
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          A tabs component that allows users to navigate between different content sections. Tabs
          are useful for organizing content into logical groups and reducing clutter by showing only
          one section at a time.
        </Typography>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Installation
        </Typography>
        <CodeExample title="Install the component" code={'pnpm add @nipsys/shadcn-lsd'} />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Import
        </Typography>
        <CodeExample
          title="Import the component"
          code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample
          title="Basic tabs"
          code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Tab 2</p>
  </TabsContent>
</Tabs>`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Default Tabs
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Create a basic tabs component with multiple tabs and content sections.
        </Typography>

        <ComponentPreview
          title="Default tabs"
          clientOnly={true}
          code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Tab 2</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Tab 3</p>
  </TabsContent>
</Tabs>`}
        >
          <LSDTabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Tab 1</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Tab 2</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Tab 3</p>
            </TabsContent>
          </LSDTabs>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Sizes
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            size
          </code>{' '}
          prop to change the size of the tabs. Available sizes are{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            sm
          </code>
          ,{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            md
          </code>
          , and{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            lg
          </code>
          .
        </Typography>

        <ComponentPreview
          title="Tabs sizes"
          clientOnly={true}
          code={`<div className="space-y-(--lsd-spacing-larger)">
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Small Tabs</h3>
    <Tabs defaultValue="tab1" size="sm">
      <TabsList size="sm">
        <TabsTrigger value="tab1" size="sm">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" size="sm">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" size="sm">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Small Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Small Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Small Tab 3</p>
      </TabsContent>
    </Tabs>
  </div>

  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Medium Tabs</h3>
    <Tabs defaultValue="tab1" size="md">
      <TabsList size="md">
        <TabsTrigger value="tab1" size="md">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" size="md">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" size="md">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Medium Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Medium Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Medium Tab 3</p>
      </TabsContent>
    </Tabs>
  </div>

  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Large Tabs</h3>
    <Tabs defaultValue="tab1" size="lg">
      <TabsList size="lg">
        <TabsTrigger value="tab1" size="lg">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" size="lg">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" size="lg">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Large Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Large Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Large Tab 3</p>
      </TabsContent>
    </Tabs>
  </div>
</div>`}
        >
          <div className="space-y-(--lsd-spacing-larger)">
            <div>
              <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                Small Tabs
              </Typography>
              <LSDTabs defaultValue="tab1" size="sm">
                <TabsList size="sm">
                  <TabsTrigger value="tab1" size="sm">
                    Tab 1
                  </TabsTrigger>
                  <TabsTrigger value="tab2" size="sm">
                    Tab 2
                  </TabsTrigger>
                  <TabsTrigger value="tab3" size="sm">
                    Tab 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p>Content for Small Tab 1</p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p>Content for Small Tab 2</p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p>Content for Small Tab 3</p>
                </TabsContent>
              </LSDTabs>
            </div>

            <div>
              <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                Medium Tabs
              </Typography>
              <LSDTabs defaultValue="tab1" size="md">
                <TabsList size="md">
                  <TabsTrigger value="tab1" size="md">
                    Tab 1
                  </TabsTrigger>
                  <TabsTrigger value="tab2" size="md">
                    Tab 2
                  </TabsTrigger>
                  <TabsTrigger value="tab3" size="md">
                    Tab 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p>Content for Medium Tab 1</p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p>Content for Medium Tab 2</p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p>Content for Medium Tab 3</p>
                </TabsContent>
              </LSDTabs>
            </div>

            <div>
              <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                Large Tabs
              </Typography>
              <LSDTabs defaultValue="tab1" size="lg">
                <TabsList size="lg">
                  <TabsTrigger value="tab1" size="lg">
                    Tab 1
                  </TabsTrigger>
                  <TabsTrigger value="tab2" size="lg">
                    Tab 2
                  </TabsTrigger>
                  <TabsTrigger value="tab3" size="lg">
                    Tab 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p>Content for Large Tab 1</p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p>Content for Large Tab 2</p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p>Content for Large Tab 3</p>
                </TabsContent>
              </LSDTabs>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Full Width Tabs
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            fullWidth
          </code>{' '}
          prop to make the tabs span the full width of their container.
        </Typography>

        <ComponentPreview
          title="Full width tabs"
          clientOnly={true}
          code={`<Tabs defaultValue="tab1" fullWidth>
  <TabsList fullWidth>
    <TabsTrigger value="tab1" fullWidth>Tab 1</TabsTrigger>
    <TabsTrigger value="tab2" fullWidth>Tab 2</TabsTrigger>
    <TabsTrigger value="tab3" fullWidth>Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Full Width Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Full Width Tab 2</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Full Width Tab 3</p>
  </TabsContent>
</Tabs>`}
        >
          <LSDTabs defaultValue="tab1" fullWidth>
            <TabsList fullWidth>
              <TabsTrigger value="tab1" fullWidth>
                Tab 1
              </TabsTrigger>
              <TabsTrigger value="tab2" fullWidth>
                Tab 2
              </TabsTrigger>
              <TabsTrigger value="tab3" fullWidth>
                Tab 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Full Width Tab 1</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Full Width Tab 2</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Full Width Tab 3</p>
            </TabsContent>
          </LSDTabs>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Tabs with Icons
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Add icons to your tabs to provide visual context and improve usability.
        </Typography>

        <ComponentPreview
          title="Tabs with icons"
          clientOnly={true}
          code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">
      Tab 1
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <title>Lightning Bolt Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    </TabsTrigger>
    <TabsTrigger value="tab2">
      Tab 2
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <title>Envelope Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    </TabsTrigger>
    <TabsTrigger value="tab3">
      Tab 3
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <title>User Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Tab 1 with Icon</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Tab 2 with Icon</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Tab 3 with Icon</p>
  </TabsContent>
</Tabs>`}
        >
          <LSDTabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">
                Tab 1
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <title>Lightning Bolt Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="tab2">
                Tab 2
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <title>Envelope Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="tab3">
                Tab 3
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <title>User Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Tab 1 with Icon</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Tab 2 with Icon</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Tab 3 with Icon</p>
            </TabsContent>
          </LSDTabs>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Disabled Tabs
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            disabled
          </code>{' '}
          prop to prevent users from selecting certain tabs.
        </Typography>

        <ComponentPreview
          title="Disabled tabs"
          clientOnly={true}
          code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Active Tab</TabsTrigger>
    <TabsTrigger value="tab2">Normal Tab</TabsTrigger>
    <TabsTrigger value="tab3" disabled>
      Disabled Tab
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Active Tab</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Normal Tab</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Disabled Tab (not accessible)</p>
  </TabsContent>
</Tabs>`}
        >
          <LSDTabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Active Tab</TabsTrigger>
              <TabsTrigger value="tab2">Normal Tab</TabsTrigger>
              <TabsTrigger value="tab3" disabled>
                Disabled Tab
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Active Tab</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Normal Tab</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Disabled Tab (not accessible)</p>
            </TabsContent>
          </LSDTabs>
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
              Tabs Props
            </Typography>
            <div className="space-y-(--lsd-spacing-base)">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  defaultValue
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  The value of the tab that should be active by default
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
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  The controlled value of the active tab
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
                  Callback when the active tab changes
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
                  Default: <code className="px-(--lsd-spacing-smaller) bg-muted rounded">"md"</code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  fullWidth
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">false</code>
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
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  Additional CSS classes to apply to the tabs
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-(--lsd-spacing-base)">
          <CardContent className="p-(--lsd-spacing-large)">
            <Typography variant="h3" className="mb-(--lsd-spacing-base)">
              TabsTrigger Props
            </Typography>
            <div className="space-y-(--lsd-spacing-base)">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  value
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  The value that identifies this tab
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
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">false</code>
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
                  Default: <code className="px-(--lsd-spacing-smaller) bg-muted rounded">"md"</code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  fullWidth
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">false</code>
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-(--lsd-spacing-base)">
          <CardContent className="p-(--lsd-spacing-large)">
            <Typography variant="h3" className="mb-(--lsd-spacing-base)">
              TabsContent Props
            </Typography>
            <div className="space-y-(--lsd-spacing-base)">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  value
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  The value that identifies this content (must match a trigger)
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
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  Additional CSS classes to apply to the content
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
          Tabs follow WAI-ARIA guidelines and are fully accessible. The component uses proper role
          attributes, keyboard navigation support, and screen reader announcements. Users can
          navigate between tabs using arrow keys, and the active tab is properly announced to screen
          readers.
        </Typography>
      </div>
    </div>
  );
}
