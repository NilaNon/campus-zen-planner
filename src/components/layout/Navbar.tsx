
import React, { useEffect, useState } from 'react';
import { Bell, User, SidebarClose } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if the user is logged in when component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(Boolean(token));
  }, []);

  const handleLogout = async () => {
    try {
      // Call the logout API
      await authApi.logout();
      
      // Remove the token from localStorage
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
      
      // Navigate to sign in page
      navigate('/sign-in');
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error logging out",
        description: "An error occurred while logging out.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="border-b bg-card py-3 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-muted">
          <SidebarClose className="h-5 w-5" />
        </SidebarTrigger>
        <h1 className="text-lg font-semibold">Campus Zen Planner</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-zen-purple text-white text-xs flex items-center justify-center">3</span>
        </Button>
        
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/settings">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="outline" size="sm" asChild>
            <Link to="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
