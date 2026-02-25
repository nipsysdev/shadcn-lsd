# @nipsys/shadcn-lsd

[![license](https://img.shields.io/npm/l/@nipsys/shadcn-lsd.svg)](https://github.com/nipsysdev/shadcn-lsd/blob/main/LICENSE)
[![React](https://img.shields.io/npm/dependency-version/@nipsys/shadcn-lsd/peer/react.svg)](https://react.dev)

A React component library implementing the Logos Design System (LSD). Built with Radix UI primitives and Tailwind CSS, following the shadcn/ui patterns.

## Installation

```bash
pnpm add @nipsys/shadcn-lsd
```

## Usage

### Import Components

```tsx
import { Dialog, DialogTrigger, DialogContent, Button } from "@nipsys/shadcn-lsd";
```

### CSS Import

```tsx
import '@nipsys/shadcn-lsd/css';
```

Or in a CSS stylesheet:

```css
@import "@nipsys/shadcn-lsd/css";
```

### Example

```tsx
import { Dialog, DialogTrigger, DialogContent, Button } from "@nipsys/shadcn-lsd";

function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <p>Dialog content here</p>
      </DialogContent>
    </Dialog>
  );
}

export default App;
```

### Theming

The library supports light and dark themes out of the box. Add the `dark` class to your root element to enable dark mode:

```html
<html class="dark">
  <!-- your app -->
</html>
```

### Theme Variants

A teal theme variant is also available:

```html
<html class="theme-teal">
  <!-- light teal theme -->
</html>

<html class="dark theme-teal">
  <!-- dark teal theme -->
</html>
```

### CSS Variables

The design system uses CSS custom properties that you can override:

```css
:root {
  /* Core colors */
  --lsd-primary: #000000;
  --lsd-primary-foreground: #ffffff;
  --lsd-text-primary: #000000;
  --lsd-text-secondary: #808080;
  --lsd-border: #000000;
  --lsd-surface: #ffffff;

  /* Icon colors */
  --lsd-icon-primary: #000000;
  --lsd-icon-secondary: #ffffff;

  /* Semantic colors */
  --lsd-destructive: #b91c1c;
  --lsd-destructive-text: #cb3939;
  --lsd-success: #15803d;
  --lsd-success-text: #168440;
  --lsd-warning: #f59e0b;
  --lsd-warning-text: #d68b09;
  --lsd-info: #2563eb;
  --lsd-info-text: #2563eb;
}
```

## Components

| Component | Description | Playground |
|-----------|-------------|------------|
| [Accordion](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FAccordion.fixture.tsx%22%7D) | Vertically stacked collapsible sections | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FAccordion.fixture.tsx%22%7D) |
| [AlertDialog](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FAlertDialog.fixture.tsx%22%7D) | Modal dialog for critical confirmations | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FAlertDialog.fixture.tsx%22%7D) |
| [Autocomplete](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FAutocomplete.fixture.tsx%22%7D) | Input with async suggestion fetching | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FAutocomplete.fixture.tsx%22%7D) |
| [Badge](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FBadge.fixture.tsx%22%7D) | Small label for status or categorization | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FBadge.fixture.tsx%22%7D) |
| [Button](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FButton.fixture.tsx%22%7D) | Interactive button with multiple variants | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FButton.fixture.tsx%22%7D) |
| [ButtonGroup](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FButtonGroup.fixture.tsx%22%7D) | Grouped buttons with optional separators | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FButtonGroup.fixture.tsx%22%7D) |
| [Card](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FCard.fixture.tsx%22%7D) | Container for related content | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FCard.fixture.tsx%22%7D) |
| [Checkbox](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FCheckbox.fixture.tsx%22%7D) | Boolean input control | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FCheckbox.fixture.tsx%22%7D) |
| [Command](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FCommand.fixture.tsx%22%7D) | Command palette for keyboard navigation | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FCommand.fixture.tsx%22%7D) |
| [Dialog](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FDialog.fixture.tsx%22%7D) | Modal overlay for focused content | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FDialog.fixture.tsx%22%7D) |
| [Input](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FInput.fixture.tsx%22%7D) | Text input field | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FInput.fixture.tsx%22%7D) |
| [Label](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FLabel.fixture.tsx%22%7D) | Form field label | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FLabel.fixture.tsx%22%7D) |
| [Menubar](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FMenubar.fixture.tsx%22%7D) | Horizontal menu bar with dropdown menus | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FMenubar.fixture.tsx%22%7D) |
| [Popover](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FPopover.fixture.tsx%22%7D) | Floating content anchored to trigger | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FPopover.fixture.tsx%22%7D) |
| [Progress](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FProgress.fixture.tsx%22%7D) | Visual indicator of completion | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FProgress.fixture.tsx%22%7D) |
| [ScrollArea](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FScrollArea.fixture.tsx%22%7D) | Custom scrollbar container | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FScrollArea.fixture.tsx%22%7D) |
| [Select](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSelect.fixture.tsx%22%7D) | Dropdown selection input | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSelect.fixture.tsx%22%7D) |
| [Separator](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSeparator.fixture.tsx%22%7D) | Visual divider between sections | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSeparator.fixture.tsx%22%7D) |
| [Sheet](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSheet.fixture.tsx%22%7D) | Slide-out panel overlay | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSheet.fixture.tsx%22%7D) |
| [Sidebar](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSidebar.fixture.tsx%22%7D) | Navigation sidebar component | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSidebar.fixture.tsx%22%7D) |
| [Sonner](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSonner.fixture.tsx%22%7D) | Toast notifications | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSonner.fixture.tsx%22%7D) |
| [Switch](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSwitch.fixture.tsx%22%7D) | Toggle switch input | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FSwitch.fixture.tsx%22%7D) |
| [Tabs](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FTabs.fixture.tsx%22%7D) | Tabbed content navigation | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FTabs.fixture.tsx%22%7D) |
| [Toggle](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FToggle.fixture.tsx%22%7D) | Two-state button | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FToggle.fixture.tsx%22%7D) |
| [ToggleGroup](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FToggleGroup.fixture.tsx%22%7D) | Group of toggle buttons | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FToggleGroup.fixture.tsx%22%7D) |
| [Typography](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FTypography.fixture.tsx%22%7D) | Text styling components | [View →](https://lsd.nipsys.dev/?fixtureId=%7B%22path%22%3A%22src%2F__cosmos__%2Ffixtures%2FTypography.fixture.tsx%22%7D) |

## Development
M
### Prerequisites

- Node.js >= 24.0.0
- pnpm >= 10

### Setup

```bash
# Clone the repository
git clone https://github.com/nipsysdev/shadcn-lsd.git
cd shadcn-lsd

# Install dependencies
pnpm install
```

### Scripts

```bash
# Start component playground
pnpm cosmos

# Build the library
pnpm build

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Lint code
pnpm lint

# Format code
pnpm format
```

### Component Playground

The project uses React Cosmos for component development. Run `pnpm cosmos` to start the playground at `http://localhost:5000`.

To export a static build for deployment:

```bash
pnpm cosmos-export
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible primitives
- **Vite** - Build tooling
- **Vitest** - Testing framework
- **React Cosmos** - Component playground

## Peer Dependencies

Make sure your project has these installed:

```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```

## License

[GPL-3.0-or-later](LICENSE)
