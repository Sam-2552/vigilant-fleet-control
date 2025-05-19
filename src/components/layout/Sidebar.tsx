
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AlertTriangle,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  Car,
  User,
  Bell,
  ClipboardList,
  FileText,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  role: "driver" | "owner" | "client" | "admin";
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  // Define navigation items based on role
  const getNavItems = () => {
    const commonItems = [
      { label: "Dashboard", icon: Home, path: "/dashboard" },
      { label: "Profile", icon: User, path: "/profile" },
    ];

    const driverItems = [
      { label: "Feedback", icon: AlertTriangle, path: "/feedback" },
      { label: "Messages", icon: MessageSquare, path: "/messages" },
      { label: "Logs", icon: FileText, path: "/logs" },
      { label: "Vehicle", icon: Car, path: "/vehicle-details" },
      { label: "Snooze/Kill", icon: Bell, path: "/snooze-kill" },
    ];

    const ownerItems = [
      { label: "Drivers", icon: User, path: "/drivers" },
      { label: "Messages", icon: MessageSquare, path: "/messages" },
      { label: "Logs", icon: FileText, path: "/logs" },
      { label: "Reports", icon: BarChart3, path: "/reports" },
      { label: "GPS Tracking", icon: Car, path: "/gps-tracking" },
      { label: "Notifications", icon: Bell, path: "/notifications" },
      { label: "Subscription", icon: ClipboardList, path: "/owner-subscription" },
    ];

    const clientItems = [
      { label: "Owners", icon: User, path: "/owners" },
      { label: "Subscription", icon: ClipboardList, path: "/client-subscription" },
    ];

    const adminItems = [
      { label: "Clients", icon: User, path: "/clients" },
      { label: "Config", icon: Settings, path: "/config-alerts" },
      { label: "Features", icon: Settings, path: "/enable-features" },
    ];

    switch (role) {
      case "driver":
        return [...commonItems, ...driverItems];
      case "owner":
        return [...commonItems, ...ownerItems];
      case "client":
        return [...commonItems, ...clientItems];
      case "admin":
        return [...commonItems, ...adminItems];
      default:
        return commonItems;
    }
  };

  const navItems = getNavItems();

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center">
            <span className="text-xl font-bold text-sidebar-foreground">DDAS</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-sidebar-foreground hover:bg-sidebar-primary"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-link",
                isLinkActive(item.path) ? "active" : ""
              )}
            >
              <item.icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <Link
          to="/help"
          className={cn(
            "nav-link mb-2",
            isLinkActive("/help") ? "active" : ""
          )}
        >
          <HelpCircle size={18} />
          {!collapsed && <span>Help</span>}
        </Link>
        <Link
          to="/login"
          className="nav-link text-sidebar-foreground hover:bg-destructive"
        >
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
