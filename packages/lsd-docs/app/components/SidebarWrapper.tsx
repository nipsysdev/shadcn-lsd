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
import { BookOpenIcon, GithubLogoIcon } from '@phosphor-icons/react';
import type React from 'react';
import { navItems } from '../config/navigation';

interface SidebarWrapperProps {
  currentPath: string;
  children: React.ReactNode;
}

export default function SidebarWrapper({ currentPath, children }: SidebarWrapperProps) {
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
                    <span className="text-xs text-muted-foreground">v0.2.5</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <ScrollArea className="h-full">
            {navItems.map(group => (
              <SidebarGroup key={group.title}>
                <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map(item => (
                      <SidebarMenuItem key={item.title}>
                        {item.subItems ? (
                          <>
                            <SidebarMenuButton>
                              {item.icon && <item.icon weight="duotone" />}
                              <span>{item.title}</span>
                            </SidebarMenuButton>
                            <SidebarMenuSub>
                              {item.subItems.map(subItem => (
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
                              currentPath === item.url ? 'bg-accent text-accent-foreground' : ''
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
