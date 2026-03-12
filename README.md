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

| Component | Description |
|-----------|-------------|
| Accordion | Vertically stacked collapsible sections |
| AlertDialog | Modal dialog for critical confirmations |
| Autocomplete | Input with async suggestion fetching |
| Badge | Small label for status or categorization |
| Button | Interactive button with multiple variants |
| ButtonGroup | Grouped buttons with optional separators |
| Card | Container for related content |
| Checkbox | Boolean input control |
| Command | Command palette for keyboard navigation |
| Dialog | Modal overlay for focused content |
| Input | Text input field |
| Label | Form field label |
| Menubar | Horizontal menu bar with dropdown menus |
| Popover | Floating content anchored to trigger |
| Progress | Visual indicator of completion |
| ScrollArea | Custom scrollbar container |
| Select | Dropdown selection input |
| Separator | Visual divider between sections |
| Sheet | Slide-out panel overlay |
| Sidebar | Navigation sidebar component |
| Sonner | Toast notifications |
| Switch | Toggle switch input |
| Tabs | Tabbed content navigation |
| Toggle | Two-state button |
| ToggleGroup | Group of toggle buttons |
| Typography | Text styling components |

## Development

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

# Start documentation site (Next.js)
pnpm docs:dev

# Build documentation site
pnpm docs:build

# Preview documentation build
pnpm docs:preview
```

### Documentation Site

The documentation site is built with Next.js 16 and uses static site generation. Run `pnpm docs:dev` to start the development server at `http://localhost:3000`.

The documentation is automatically deployed to GitHub Pages via the `docs/` directory.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible primitives
- **Vite** - Build tooling
- **Vitest** - Testing framework
- **Next.js 16** - Documentation site framework

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
