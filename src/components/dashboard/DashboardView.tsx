import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Briefcase,
  Car,
  FileText,
  MessageSquare,
  User,
  Settings,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  badgeCount?: number;
}

interface DashboardViewProps {
  role: "driver" | "owner" | "client" | "admin";
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon,
  path,
  badgeCount,
}) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="card-hover cursor-pointer h-full flex flex-col" 
      onClick={() => navigate(path)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            {icon}
          </div>
          {badgeCount !== undefined && (
            <Badge variant="destructive" className="ml-auto">
              {badgeCount}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground pt-2 border-t">
        Click to access
      </CardFooter>
    </Card>
  );
};

const DashboardView: React.FC<DashboardViewProps> = ({ role }) => {
  const getModules = () => {
    // Define module interface to match the required props
    interface ModuleType {
      title: string;
      description: string;
      icon: React.ReactNode;
      path: string;
      badgeCount?: number;
    }

    const driverModules: ModuleType[] = [
      {
        title: "Feedback System",
        description: "Submit feedback about alert accuracy and system performance",
        icon: <AlertTriangle size={20} />,
        path: "/feedback",
      },
      {
        title: "Messaging",
        description: "Communicate directly with your fleet owner",
        icon: <MessageSquare size={20} />,
        path: "/messages",
        badgeCount: 3,
      },
      {
        title: "Logs",
        description: "Review your historical driving logs and alerts",
        icon: <FileText size={20} />,
        path: "/logs",
      },
      {
        title: "Vehicle Details",
        description: "Check information about your assigned vehicle",
        icon: <Car size={20} />,
        path: "/vehicle-details",
      },
      {
        title: "Snooze/Kill Switch",
        description: "Temporarily disable alerts or shut down the system",
        icon: <Bell size={20} />,
        path: "/snooze-kill",
      },
    ];

    const ownerModules: ModuleType[] = [
      {
        title: "Driver Details",
        description: "Manage your drivers and review their profiles",
        icon: <User size={20} />,
        path: "/drivers",
      },
      {
        title: "Messaging",
        description: "Communicate with your drivers",
        icon: <MessageSquare size={20} />,
        path: "/messages",
        badgeCount: 2,
      },
      {
        title: "Reports & Analytics",
        description: "View performance metrics and safety analytics",
        icon: <BarChart3 size={20} />,
        path: "/reports",
      },
      {
        title: "Driver's Video",
        description: "Access driver video footage tied to alert events",
        icon: <Calendar size={20} />,
        path: "/drivers-video",
      },
      {
        title: "GPS Tracking",
        description: "Track your vehicles in real-time on the map",
        icon: <Car size={20} />,
        path: "/gps-tracking",
      },
      {
        title: "Notifications",
        description: "Review important alerts and system updates",
        icon: <Bell size={20} />,
        path: "/notifications",
        badgeCount: 5,
      },
    ];

    const clientModules: ModuleType[] = [
      {
        title: "Owner Details",
        description: "Manage fleet owners registered under your account",
        icon: <Briefcase size={20} />,
        path: "/owners",
      },
      {
        title: "Client Subscription",
        description: "Manage your subscription and billing",
        icon: <FileText size={20} />,
        path: "/client-subscription",
      },
      {
        title: "Client Details",
        description: "View and update your organization information",
        icon: <User size={20} />,
        path: "/client-details",
      },
    ];

    const adminModules: ModuleType[] = [
      {
        title: "Client Management",
        description: "Manage client accounts and their details",
        icon: <User size={20} />,
        path: "/clients",
      },
      {
        title: "Alert Configuration",
        description: "Configure alert thresholds and sensitivity",
        icon: <Settings size={20} />,
        path: "/config-alerts",
      },
      {
        title: "Feature Management",
        description: "Enable or disable features for specific clients",
        icon: <Settings size={20} />,
        path: "/enable-features",
      },
      {
        title: "System Logs",
        description: "Review OBD and system fault logs",
        icon: <FileText size={20} />,
        path: "/faulty-logs",
      },
    ];

    switch (role) {
      case "driver":
        return driverModules;
      case "owner":
        return ownerModules;
      case "client":
        return clientModules;
      case "admin":
        return adminModules;
      default:
        return [];
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Welcome to DDAS</h2>
        <p className="text-muted-foreground">
          Driver Distraction Alert System - {role.charAt(0).toUpperCase() + role.slice(1)} Portal
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getModules().map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            description={module.description}
            icon={module.icon}
            path={module.path}
            badgeCount={module.badgeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardView;
