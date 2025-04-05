
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sidebar as ShadcnSidebar, 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarHeader
} from '@/components/ui/sidebar';
import { Home, Map, Users, Calendar, BookOpen, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Study Spaces', icon: Map, path: '/study-spaces' },
    { name: 'Study Groups', icon: Users, path: '/study-groups' },
    { name: 'Planner', icon: Calendar, path: '/planner' },
    { name: 'Resources', icon: BookOpen, path: '/resources' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <ShadcnSidebar>
      <SidebarHeader className="px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zen-purple flex items-center justify-center">
            <span className="text-white font-bold">CZ</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Campus Zen</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;
