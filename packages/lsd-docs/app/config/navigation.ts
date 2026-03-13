import {
  ChatIcon,
  CodeIcon,
  CompassIcon,
  LayoutIcon,
  PaintBrushIcon,
  PaletteIcon,
  RocketIcon,
  StackIcon,
  TableIcon,
  TextAaIcon,
  TextboxIcon,
  TextIndentIcon,
} from '@phosphor-icons/react';
import type { NavGroup } from '../types/navigation';

export const navItems: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        url: '/getting-started/installation',
        icon: RocketIcon,
      },
      { title: 'Usage', url: '/getting-started/usage', icon: CodeIcon },
      {
        title: 'Theming',
        url: '/getting-started/theming',
        icon: PaintBrushIcon,
      },
    ],
  },
  {
    title: 'Design Tokens',
    items: [
      { title: 'Colors', url: '/design-tokens/colors', icon: PaletteIcon },
      {
        title: 'Typography',
        url: '/design-tokens/typography',
        icon: TextAaIcon,
      },
      { title: 'Spacing', url: '/design-tokens/spacing', icon: TextIndentIcon },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Forms',
        icon: TextboxIcon,
        subItems: [
          { title: 'Button', url: '/components/button' },
          { title: 'Input', url: '/components/input' },
          { title: 'Checkbox', url: '/components/checkbox' },
          { title: 'Switch', url: '/components/switch' },
          { title: 'Select', url: '/components/select' },
        ],
      },
      {
        title: 'Navigation',
        icon: CompassIcon,
        subItems: [
          { title: 'Tabs', url: '/components/tabs' },
          { title: 'Menubar', url: '/components/menubar' },
          { title: 'Command', url: '/components/command' },
        ],
      },
      {
        title: 'Feedback',
        icon: ChatIcon,
        subItems: [
          { title: 'Alert Dialog', url: '/components/alert-dialog' },
          { title: 'Dialog', url: '/components/dialog' },
          { title: 'Sonner', url: '/components/sonner' },
          { title: 'Progress', url: '/components/progress' },
        ],
      },
      {
        title: 'Layout',
        icon: LayoutIcon,
        subItems: [
          { title: 'Card', url: '/components/card' },
          { title: 'Separator', url: '/components/separator' },
          { title: 'Scroll Area', url: '/components/scroll-area' },
        ],
      },
      {
        title: 'Data Display',
        icon: TableIcon,
        subItems: [
          { title: 'Badge', url: '/components/badge' },
          { title: 'Accordion', url: '/components/accordion' },
        ],
      },
      {
        title: 'Overlays',
        icon: StackIcon,
        subItems: [
          { title: 'Popover', url: '/components/popover' },
          { title: 'Sheet', url: '/components/sheet' },
        ],
      },
    ],
  },
];
