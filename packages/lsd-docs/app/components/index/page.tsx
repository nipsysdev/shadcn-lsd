'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Link from 'next/link';

// Component data organized by category
const componentCategories = [
  {
    name: 'Forms',
    description: 'Input components for collecting user data',
    components: [
      {
        name: 'Input',
        path: '/components/input',
        description: 'Text input field',
      },
      {
        name: 'Checkbox',
        path: '/components/checkbox',
        description: 'Checkbox selection',
      },
      {
        name: 'Switch',
        path: '/components/switch',
        description: 'Toggle switch',
      },
      {
        name: 'Select',
        path: '/components/select',
        description: 'Dropdown selection',
      },
    ],
  },
  {
    name: 'Navigation',
    description: 'Components for navigating through your application',
    components: [
      {
        name: 'Button',
        path: '/components/button',
        description: 'Action button',
      },
      {
        name: 'ButtonGroup',
        path: '/components/button-group',
        description: 'Grouped buttons',
      },
      { name: 'Menubar', path: '/components/menubar', description: 'Menu bar' },
      {
        name: 'Tabs',
        path: '/components/tabs',
        description: 'Tabbed navigation',
      },
      {
        name: 'Sidebar',
        path: '/components/sidebar',
        description: 'Sidebar navigation',
      },
    ],
  },
  {
    name: 'Feedback',
    description: 'Components for providing feedback to users',
    components: [
      { name: 'Badge', path: '/components/badge', description: 'Status badge' },
      {
        name: 'Progress',
        path: '/components/progress',
        description: 'Progress indicator',
      },
      {
        name: 'Sonner',
        path: '/components/sonner',
        description: 'Toast notifications',
      },
      {
        name: 'AlertDialog',
        path: '/components/alert-dialog',
        description: 'Alert dialog',
      },
    ],
  },
  {
    name: 'Layout',
    description: 'Components for structuring your layout',
    components: [
      { name: 'Card', path: '/components/card', description: 'Card container' },
      {
        name: 'Separator',
        path: '/components/separator',
        description: 'Visual separator',
      },
      {
        name: 'ScrollArea',
        path: '/components/scroll-area',
        description: 'Scrollable area',
      },
    ],
  },
  {
    name: 'Data Display',
    description: 'Components for displaying data and information',
    components: [
      {
        name: 'Typography',
        path: '/components/typography',
        description: 'Text styling',
      },
      { name: 'Label', path: '/components/label', description: 'Form label' },
      {
        name: 'Autocomplete',
        path: '/components/autocomplete',
        description: 'Autocomplete input',
      },
      {
        name: 'Command',
        path: '/components/command',
        description: 'Command palette',
      },
    ],
  },
  {
    name: 'Overlays',
    description: 'Components that overlay content',
    components: [
      {
        name: 'Dialog',
        path: '/components/dialog',
        description: 'Modal dialog',
      },
      {
        name: 'Popover',
        path: '/components/popover',
        description: 'Popover content',
      },
      { name: 'Sheet', path: '/components/sheet', description: 'Side sheet' },
      {
        name: 'Accordion',
        path: '/components/accordion',
        description: 'Collapsible content',
      },
    ],
  },
];

export default function ComponentsIndexPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Components
        </Typography>
        <Typography variant="body1" className="text-muted-foreground text-lg">
          Explore our collection of 24 beautiful, accessible, and customizable
          components
        </Typography>
      </div>

      {componentCategories.map((category) => (
        <div key={category.name} className="mb-(--lsd-spacing-largest)">
          <div className="mb-(--lsd-spacing-large)">
            <Typography variant="h2" className="mb-(--lsd-spacing-small)">
              {category.name}
            </Typography>
            <Typography variant="body1" className="text-muted-foreground">
              {category.description}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
            {category.components.map((component) => (
              <Card
                key={component.name}
                className="hover:border-primary transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-base">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography
                    variant="body1"
                    className="text-sm text-muted-foreground"
                  >
                    <Link
                      href={component.path}
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      View documentation
                      <ArrowRightIcon
                        className="ml-(--lsd-spacing-smaller) h-4 w-4"
                        weight="duotone"
                      />
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="mt-(--lsd-spacing-larger)" />
        </div>
      ))}
    </div>
  );
}
