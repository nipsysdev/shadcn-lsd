import {
  Calendar,
  ChevronRight,
  Home,
  Inbox,
  LayoutDashboard,
  Palette,
  Settings,
  Sparkles,
  Type,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Typography } from '@/components/ui/typography';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

const menuItems = [
  { title: 'Dashboard', url: '#dashboard', icon: LayoutDashboard },
  { title: 'Components', url: '#components', icon: Sparkles },
  { title: 'Typography', url: '#typography', icon: Type },
  { title: 'Colors', url: '#colors', icon: Palette },
  { title: 'Calendar', url: '#calendar', icon: Calendar },
  { title: 'Inbox', url: '#inbox', icon: Inbox },
];

export default function OverviewFixture() {
  return (
    <div className="lsd:size-full lsd:overflow-hidden lsd:m-0!">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <div className="lsd:flex lsd:aspect-square lsd:size-8 lsd:items-center lsd:justify-center lsd:rounded-lg lsd:bg-sidebar-primary lsd:text-sidebar-primary-foreground">
                    <Home className="lsd:size-4" />
                  </div>
                  <div className="lsd:flex lsd:flex-col lsd:gap-0.5 lsd:leading-none">
                    <span className="lsd:font-semibold">LSD React</span>
                    <span className="lsd:text-xs">Component Library</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronRight className="lsd:ml-auto lsd:size-4" />
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="lsd:flex lsd:h-14 lsd:shrink-0 lsd:items-center lsd:gap-2 lsd:border-b lsd:p-4">
            <SidebarTrigger />

            <div className="lsd:flex lsd:justify-between lsd:flex-auto lsd:items-center">
              <Typography variant="h1" className="lsd:text-lg">
                Component Overview
              </Typography>

              <div className="lsd:flex lsd:gap-2 lsd:items-center">
                <ThemeToggle />
                <ThemeAccentToggle />
              </div>
            </div>
          </header>

          <div className="lsd:p-4">
            <div className="lsd:grid lsd:grid-cols-2 lsd:lg:grid-cols-4 lsd:gap-4">
              <div className="lsd:space-y-2">
                <Label>Buttons</Label>
                <div className="lsd:flex lsd:flex-col lsd:gap-2">
                  <Button variant="filled">Filled</Button>
                  <Button variant="outlined">Outlined</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="success">Success</Button>
                  <Button disabled>Disabled</Button>
                  <Button loading>Loading...</Button>
                </div>
              </div>

              <div className="lsd:space-y-2">
                <Label>Badges</Label>
                <div className="lsd:flex lsd:flex-wrap lsd:gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="outlined">Outlined</Badge>
                  <Badge variant="dot">Dot</Badge>
                </div>
              </div>

              <div className="lsd:space-y-2">
                <Label>Typography Colors</Label>
                <div className="lsd:space-y-1 lsd:flex lsd:flex-col">
                  <Typography variant="body1" color="primary">
                    Primary text
                  </Typography>
                  <Typography variant="body1" color="secondary">
                    Secondary text
                  </Typography>
                  <Typography variant="body1" color="destructive">
                    Destructive text
                  </Typography>
                  <Typography variant="body1" color="success">
                    Success text
                  </Typography>
                  <Typography variant="body1" color="warning">
                    Warning text
                  </Typography>
                  <Typography variant="body1" color="info">
                    Info text
                  </Typography>
                </div>
              </div>

              <div className="lsd:space-y-2">
                <Label>Form Elements</Label>
                <div className="lsd:space-y-2">
                  <Input placeholder="Normal input" />
                  <Input disabled placeholder="Disabled input" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Option 1</SelectItem>
                      <SelectItem value="2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="lsd:flex lsd:items-center lsd:space-x-2">
                    <Checkbox id="check" defaultChecked />
                    <Label htmlFor="check" className="lsd:cursor-pointer">
                      Checked
                    </Label>
                  </div>
                  <div className="lsd:flex lsd:items-center lsd:space-x-2">
                    <Checkbox id="check2" />
                    <Label htmlFor="check2" className="lsd:cursor-pointer">
                      Unchecked
                    </Label>
                  </div>
                  <div className="lsd:flex lsd:items-center lsd:justify-between">
                    <Label htmlFor="switch">Switch</Label>
                    <Switch id="switch" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="lsd:space-y-2">
                <Label>Progress</Label>
                <div className="lsd:space-y-2">
                  <Progress value={0} />
                  <Progress value={25} />
                  <Progress value={50} />
                  <Progress value={75} />
                  <Progress value={100} />
                </div>
              </div>

              <div className="lsd:space-y-2">
                <Label>Tabs</Label>
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">Active</TabsTrigger>
                    <TabsTrigger value="tab2">Inactive</TabsTrigger>
                    <TabsTrigger value="tab3">Inactive</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="lsd:mt-2">
                    <Typography variant="body2">Active content</Typography>
                  </TabsContent>
                  <TabsContent value="tab2" className="lsd:mt-2">
                    <Typography variant="body2">Content 2</Typography>
                  </TabsContent>
                  <TabsContent value="tab3" className="lsd:mt-2">
                    <Typography variant="body2">Content 3</Typography>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="lsd:space-y-2">
                <Label>Toggles</Label>
                <div className="lsd:space-y-2">
                  <Toggle pressed>Pressed</Toggle>
                  <Toggle>Unpressed</Toggle>
                  <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">A</ToggleGroupItem>
                    <ToggleGroupItem value="b">B</ToggleGroupItem>
                    <ToggleGroupItem value="c">C</ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>

              <div className="lsd:space-y-2">
                <Label>Card</Label>
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Description text</CardDescription>
                    <CardAction>
                      <Button variant="outlined" size="sm">
                        Action
                      </Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <Typography variant="body2">Card content</Typography>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Footer</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
