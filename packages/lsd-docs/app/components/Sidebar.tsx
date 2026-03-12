import { SidebarContentComponent } from './SidebarContent';

interface SidebarProps {
  currentPath: string;
}

export default function Sidebar({ currentPath }: SidebarProps) {
  return <SidebarContentComponent currentPath={currentPath} />;
}
