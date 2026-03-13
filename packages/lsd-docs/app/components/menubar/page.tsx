'use client';

import {
  Card,
  CardContent,
  Menubar as LSDMenubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

export default function MenubarPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Menubar
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          A horizontally stacked set of menus that provides access to a consistent set of commands
          or actions. Menubars are commonly used in desktop applications to organize commands into
          logical groups.
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
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample
          title="Basic menubar"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Basic Usage
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Create a menubar with multiple menus, items, and keyboard shortcuts.
        </Typography>

        <ComponentPreview
          title="Basic menubar"
          clientOnly={true}
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem shortcut="⌘T">New Tab</MenubarItem>
      <MenubarItem shortcut="⌘N">New Window</MenubarItem>
      <MenubarItem disabled>New Incognito Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem shortcut="⌘P">Print...</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem shortcut="⌘Z">Undo</MenubarItem>
      <MenubarItem shortcut="⇧⌘Z">Redo</MenubarItem>
      <MenubarSeparator />
      <MenubarItem shortcut="⌘X">Cut</MenubarItem>
      <MenubarItem shortcut="⌘C">Copy</MenubarItem>
      <MenubarItem shortcut="⌘V">Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <LSDMenubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem shortcut="⌘T">New Tab</MenubarItem>
                <MenubarItem shortcut="⌘N">New Window</MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem shortcut="⌘P">Print...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem shortcut="⌘Z">Undo</MenubarItem>
                <MenubarItem shortcut="⇧⌘Z">Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem shortcut="⌘X">Cut</MenubarItem>
                <MenubarItem shortcut="⌘C">Copy</MenubarItem>
                <MenubarItem shortcut="⌘V">Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </LSDMenubar>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          With Groups and Labels
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            MenubarGroup
          </code>{' '}
          and{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            MenubarLabel
          </code>{' '}
          to organize items into logical groups with descriptive labels.
        </Typography>

        <ComponentPreview
          title="Menubar with groups and labels"
          clientOnly={true}
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Actions</MenubarTrigger>
    <MenubarContent>
      <MenubarGroup>
        <MenubarLabel>File Actions</MenubarLabel>
        <MenubarItem>New File</MenubarItem>
        <MenubarItem>Open File</MenubarItem>
        <MenubarItem>Save File</MenubarItem>
      </MenubarGroup>
      <MenubarSeparator />
      <MenubarGroup>
        <MenubarLabel>Edit Actions</MenubarLabel>
        <MenubarItem>Cut</MenubarItem>
        <MenubarItem>Copy</MenubarItem>
        <MenubarItem>Paste</MenubarItem>
      </MenubarGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <LSDMenubar>
            <MenubarMenu>
              <MenubarTrigger>Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarLabel>File Actions</MenubarLabel>
                  <MenubarItem>New File</MenubarItem>
                  <MenubarItem>Open File</MenubarItem>
                  <MenubarItem>Save File</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarLabel>Edit Actions</MenubarLabel>
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
          </LSDMenubar>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Destructive Variant
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            destructive
          </code>{' '}
          variant on menu items to indicate dangerous actions like delete or remove.
        </Typography>

        <ComponentPreview
          title="Menubar with destructive item"
          clientOnly={true}
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File</MenubarItem>
      <MenubarItem>Save</MenubarItem>
      <MenubarSeparator />
      <MenubarItem variant="destructive">
        Delete File
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <LSDMenubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New File</MenubarItem>
                <MenubarItem>Save</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Delete File</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </LSDMenubar>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Nested Submenus
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Create nested submenus using{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            MenubarSub
          </code>
          ,{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            MenubarSubTrigger
          </code>
          , and{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            MenubarSubContent
          </code>
          .
        </Typography>

        <ComponentPreview
          title="Menubar with nested submenus"
          clientOnly={true}
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Preferences</MenubarTrigger>
    <MenubarContent>
      <MenubarSub>
        <MenubarSubTrigger>Appearance</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Theme</MenubarItem>
          <MenubarItem>Font Size</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Color Scheme</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Light</MenubarItem>
              <MenubarItem>Dark</MenubarItem>
              <MenubarItem>System</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSub>
        <MenubarSubTrigger>Settings</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>General</MenubarItem>
          <MenubarItem>Keyboard</MenubarItem>
          <MenubarItem>Language</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <LSDMenubar>
            <MenubarMenu>
              <MenubarTrigger>Preferences</MenubarTrigger>
              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>Appearance</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Theme</MenubarItem>
                    <MenubarItem>Font Size</MenubarItem>
                    <MenubarSub>
                      <MenubarSubTrigger>Color Scheme</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Light</MenubarItem>
                        <MenubarItem>Dark</MenubarItem>
                        <MenubarItem>System</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSub>
                  <MenubarSubTrigger>Settings</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>General</MenubarItem>
                    <MenubarItem>Keyboard</MenubarItem>
                    <MenubarItem>Language</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
          </LSDMenubar>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Checkbox and Radio Items
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            MenubarCheckboxItem
          </code>{' '}
          for toggleable options and{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            MenubarRadioGroup
          </code>{' '}
          with{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            MenubarRadioItem
          </code>{' '}
          for mutually exclusive options.
        </Typography>

        <ComponentPreview
          title="Menubar with checkbox and radio items"
          clientOnly={true}
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Options</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
      <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
      <MenubarCheckboxItem>Show Ruler</MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarLabel inset>Zoom Level</MenubarLabel>
      <MenubarRadioGroup value="100">
        <MenubarRadioItem value="50">50%</MenubarRadioItem>
        <MenubarRadioItem value="100">100%</MenubarRadioItem>
        <MenubarRadioItem value="150">150%</MenubarRadioItem>
        <MenubarRadioItem value="200">200%</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <LSDMenubar>
            <MenubarMenu>
              <MenubarTrigger>Options</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Ruler</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarLabel inset>Zoom Level</MenubarLabel>
                <MenubarRadioGroup value="100">
                  <MenubarRadioItem value="50">50%</MenubarRadioItem>
                  <MenubarRadioItem value="100">100%</MenubarRadioItem>
                  <MenubarRadioItem value="150">150%</MenubarRadioItem>
                  <MenubarRadioItem value="200">200%</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </LSDMenubar>
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
              Menubar Props
            </Typography>
            <div className="space-y-4">
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
                  Additional CSS classes to apply to the menubar
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-(--lsd-spacing-base)">
          <CardContent className="p-(--lsd-spacing-large)">
            <Typography variant="h3" className="mb-(--lsd-spacing-base)">
              MenubarItem Props
            </Typography>
            <div className="space-y-4">
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
                  variant
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "default" | "destructive"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">"default"</code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  shortcut
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  Keyboard shortcut to display
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  inset
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
              MenubarCheckboxItem Props
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  checked
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
                  Callback when checked state changes
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-(--lsd-spacing-base)">
          <CardContent className="p-(--lsd-spacing-large)">
            <Typography variant="h3" className="mb-(--lsd-spacing-base)">
              MenubarRadioGroup Props
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
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  The currently selected value
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
                  Callback when value changes
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
          Menubars follow WAI-ARIA guidelines and are fully accessible. The component uses proper
          role attributes, keyboard navigation support, and screen reader announcements. Users can
          navigate using arrow keys, Enter, and Escape. Keyboard shortcuts are displayed for items
          that have them.
        </Typography>
      </div>
    </div>
  );
}
