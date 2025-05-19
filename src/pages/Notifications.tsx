
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bell, Settings, CheckCheck, AlertTriangle, Calendar, Clock, Info, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Notifications = () => {
  const location = useLocation();
  const role = location.state?.role || "owner";

  const mockNotifications = [
    {
      id: 1,
      type: "alert",
      title: "High Alert: Mobile Usage",
      description: "Driver Michael J. had a high severity mobile usage alert",
      timestamp: "2025-05-19 10:23 AM",
      read: false
    },
    {
      id: 2,
      type: "system",
      title: "System Update Available",
      description: "A new system update is available for your DDAS installation",
      timestamp: "2025-05-18 03:45 PM",
      read: true
    },
    {
      id: 3,
      type: "alert",
      title: "Multiple Alerts: Driver Sarah W.",
      description: "Driver Sarah W. had 3 medium alerts in the last hour",
      timestamp: "2025-05-18 09:15 AM",
      read: false
    },
    {
      id: 4,
      type: "subscription",
      title: "Subscription Renewal",
      description: "Your subscription will expire in 10 days",
      timestamp: "2025-05-17 11:30 AM",
      read: true
    },
    {
      id: 5,
      type: "system",
      title: "Admin Made Configuration Changes",
      description: "Admin has updated the alert thresholds for your account",
      timestamp: "2025-05-16 02:20 PM",
      read: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle size={18} className="text-amber-500" />;
      case "system":
        return <Settings size={18} className="text-blue-500" />;
      case "subscription":
        return <Info size={18} className="text-purple-500" />;
      default:
        return <Bell size={18} />;
    }
  };

  return (
    <Layout role={role} pageTitle="Notifications">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
            <p className="text-muted-foreground">
              Review important alerts and system updates
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <CheckCheck size={14} />
              Mark All Read
            </Button>
            <Button variant="outline" size="icon">
              <RefreshCw size={14} />
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Bell size={20} />
              <span>Notification Center</span>
              <Badge className="ml-2">{mockNotifications.filter(n => !n.read).length} new</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4 space-y-4">
                {mockNotifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 border rounded-md ${
                      notification.read ? 'bg-background' : 'bg-muted/30 border-primary/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className={`font-medium ${notification.read ? '' : 'text-primary font-semibold'}`}>
                            {notification.title}
                            {!notification.read && <span className="inline-block w-2 h-2 bg-primary rounded-full ml-2"></span>}
                          </h3>
                          <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                            <Clock size={12} className="mr-1" />
                            {notification.timestamp.split(' ')[1]}
                          </div>
                        </div>
                        <p className="text-sm mt-1">{notification.description}</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <Calendar size={12} className="mr-1" />
                          {notification.timestamp.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="alerts" className="mt-4">
                {mockNotifications.filter(n => n.type === 'alert').map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 border rounded-md mb-4 ${
                      notification.read ? 'bg-background' : 'bg-muted/30 border-primary/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className={`font-medium ${notification.read ? '' : 'text-primary font-semibold'}`}>
                            {notification.title}
                            {!notification.read && <span className="inline-block w-2 h-2 bg-primary rounded-full ml-2"></span>}
                          </h3>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock size={12} className="mr-1" />
                            {notification.timestamp.split(' ')[1]}
                          </div>
                        </div>
                        <p className="text-sm mt-1">{notification.description}</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <Calendar size={12} className="mr-1" />
                          {notification.timestamp.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="system" className="mt-4">
                {mockNotifications.filter(n => n.type === 'system').map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 border rounded-md mb-4 ${
                      notification.read ? 'bg-background' : 'bg-muted/30 border-primary/20'
                    }`}
                  >
                    {/* Same structure as above */}
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-sm mt-1">{notification.description}</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <Calendar size={12} className="mr-1" />
                          {notification.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="subscription" className="mt-4">
                {mockNotifications.filter(n => n.type === 'subscription').map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 border rounded-md mb-4 ${
                      notification.read ? 'bg-background' : 'bg-muted/30 border-primary/20'
                    }`}
                  >
                    {/* Same structure as above */}
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-sm mt-1">{notification.description}</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <Calendar size={12} className="mr-1" />
                          {notification.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Notifications;
