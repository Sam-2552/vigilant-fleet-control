
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, Download, Flag, Calendar, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DriversVideo = () => {
  const location = useLocation();
  const role = location.state?.role || "owner";
  const driverId = location.state?.driverId || 1;

  const [selectedEvent, setSelectedEvent] = useState<null | {
    id: number;
    timestamp: string;
    type: string;
    severity: string;
    details: string;
  }>(null);

  const mockEvents = [
    {
      id: 1,
      timestamp: "2025-05-18 09:23:45",
      type: "Distraction",
      severity: "Medium",
      details: "Driver looked away from road for 3+ seconds"
    },
    {
      id: 2,
      timestamp: "2025-05-18 10:15:22",
      type: "Mobile Usage",
      severity: "High",
      details: "Driver using mobile phone while driving"
    },
    {
      id: 3,
      timestamp: "2025-05-17 14:42:30",
      type: "Yawning",
      severity: "Low",
      details: "Multiple yawns detected in short period"
    }
  ];

  return (
    <Layout role={role} pageTitle="Driver's Video">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Driver Video Footage</h2>
          <p className="text-muted-foreground">
            Access driver video footage tied to alert events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video size={20} />
                <span>Video Footage</span>
                {selectedEvent && (
                  <Badge variant={
                    selectedEvent.severity === "High" ? "destructive" :
                    selectedEvent.severity === "Medium" ? "default" : "outline"
                  } className="ml-2">
                    {selectedEvent.type}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedEvent ? (
                <div className="space-y-4">
                  <div className="bg-gray-900 aspect-video flex items-center justify-center overflow-hidden rounded-md">
                    <div className="text-white flex flex-col items-center justify-center">
                      <Video size={48} className="mb-2 opacity-50" />
                      <p className="text-sm opacity-70">Video would play here for event on {selectedEvent.timestamp}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Button size="sm" variant="outline">
                        <Flag size={14} className="mr-1" />
                        Flag
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download size={14} className="mr-1" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>Recorded: {selectedEvent.timestamp}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-1">Event Details:</h3>
                    <p className="text-sm">{selectedEvent.details}</p>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Select an event to view footage</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Alert Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="today">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="past">Past Week</TabsTrigger>
                </TabsList>
                <TabsContent value="today" className="mt-4">
                  <div className="space-y-4">
                    {mockEvents.slice(0, 2).map((event) => (
                      <div 
                        key={event.id}
                        className={`p-3 rounded-md border cursor-pointer ${
                          selectedEvent?.id === event.id ? 'border-primary bg-primary/5' : ''
                        }`}
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{event.type}</span>
                          <Badge variant={
                            event.severity === "High" ? "destructive" :
                            event.severity === "Medium" ? "default" : "outline"
                          }>
                            {event.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} />
                          <span>{event.timestamp.split(' ')[1]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="past" className="mt-4">
                  <div className="space-y-4">
                    {mockEvents.slice(2).map((event) => (
                      <div 
                        key={event.id}
                        className={`p-3 rounded-md border cursor-pointer ${
                          selectedEvent?.id === event.id ? 'border-primary bg-primary/5' : ''
                        }`}
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{event.type}</span>
                          <Badge variant={
                            event.severity === "High" ? "destructive" :
                            event.severity === "Medium" ? "default" : "outline"
                          }>
                            {event.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          <span>{event.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DriversVideo;
