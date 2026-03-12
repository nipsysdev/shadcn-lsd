'use client';

import {
  ScrollArea,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from '@nipsys/shadcn-lsd';
import {
  BookOpenIcon,
  ChatIcon,
  CompassIcon,
  DownloadIcon,
  GithubLogoIcon,
  LayoutIcon,
  ListDashesIcon,
  PaintRollerIcon,
  PaletteIcon,
  StackIcon,
  TableIcon,
  TextAaIcon,
  TextboxIcon,
  TextIndentIcon,
} from '@phosphor-icons/react';
import type React from 'react';

interface NavItem {
  title: string;
  url?: string;
  icon?: any;
  subItems?: { title: string; url: string }[];
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface SidebarWrapperProps {
  currentPath: string;
  children: React.ReactNode;
}

const navItems: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        url: '/getting-started/installation',
        icon: DownloadIcon,
      },
      { title: 'Usage', url: '/getting-started/usage', icon: ListDashesIcon },
      {
        title: 'Theming',
        url: '/getting-started/theming',
        icon: PaintRollerIcon,
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

export default function SidebarWrapper({
  currentPath,
  children,
}: SidebarWrapperProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <BookOpenIcon className="size-4" weight="duotone" />
                  </div>
                  <div className="flex flex-col gap-(--lsd-spacing-smaller) leading-none">
                    <span className="font-semibold">shadcn-lsd</span>
                    <span className="text-xs text-muted-foreground">
                      v0.2.5
                    </span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <ScrollArea className="h-full">
            {navItems.map((group) => (
              <SidebarGroup key={group.title}>
                <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        {item.subItems ? (
                          <>
                            <SidebarMenuButton>
                              {item.icon && <item.icon weight="duotone" />}
                              <span>{item.title}</span>
                            </SidebarMenuButton>
                            <SidebarMenuSub>
                              {item.subItems.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.url}>
                                  <SidebarMenuSubButton
                                    asChild
                                    className={
                                      currentPath === subItem.url
                                        ? 'bg-accent text-accent-foreground'
                                        : ''
                                    }
                                  >
                                    <a href={subItem.url}>{subItem.title}</a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </>
                        ) : (
                          <SidebarMenuButton
                            asChild
                            className={
                              currentPath === item.url
                                ? 'bg-accent text-accent-foreground'
                                : ''
                            }
                          >
                            <a href={item.url}>
                              {item.icon && <item.icon weight="duotone" />}
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        )}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </ScrollArea>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a
                  href="https://github.com/nipsysdev/shadcn-lsd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogoIcon weight="duotone" />
                  <span>GitHub</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
