
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  role: "driver" | "owner" | "client" | "admin";
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle, role }) => {
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-border h-16 flex items-center justify-between px-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-ddas-darkSlate">
            {pageTitle || "Dashboard"}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="icon">
                <Bell size={20} />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs bg-destructive text-white rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </Button>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-ddas-blue text-white flex items-center justify-center font-semibold">
                {role.charAt(0).toUpperCase()}
              </div>
              <span className="ml-2 font-medium capitalize">{role}</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 bg-secondary/20">
          <div className="animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
