
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Map, Calendar, Clock, Car, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GPSTracking = () => {
  const location = useLocation();
  const role = location.state?.role || "owner";
  
  const [selectedVehicle, setSelectedVehicle] = useState("all");
  
  // In a real app, these would be actual coordinates
  const mockAlertPoints = [
    { id: 1, lat: 30, lng: 30, type: "Distraction", severity: "Medium", timestamp: "10:23 AM" },
    { id: 2, lat: 50, lng: 70, type: "Mobile", severity: "High", timestamp: "11:05 AM" },
    { id: 3, lat: 70, lng: 40, type: "Yawning", severity: "Low", timestamp: "2:45 PM" },
  ];

  return (
    <Layout role={role} pageTitle="GPS Tracking">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">GPS Tracking</h2>
            <p className="text-muted-foreground">
              Track your vehicles in real-time on the map
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Vehicles</SelectItem>
                <SelectItem value="vh-1234">VH-1234 (Toyota Camry)</SelectItem>
                <SelectItem value="vh-5678">VH-5678 (Honda Accord)</SelectItem>
                <SelectItem value="vh-9012">VH-9012 (Ford F-150)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-3 h-[500px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map size={20} />
                <span>Live Map</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-100 h-[400px] rounded-md flex items-center justify-center relative">
                {/* This would be replaced with an actual map component */}
                <div className="text-center text-muted-foreground">
                  <Map size={48} className="mx-auto mb-2 opacity-50" />
                  <p>Map would display here with vehicle locations</p>
                </div>
                
                {/* Mock alert points on the map */}
                {mockAlertPoints.map(point => (
                  <div 
                    key={point.id} 
                    className="absolute w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                    style={{ 
                      top: `${point.lat}%`, 
                      left: `${point.lng}%`,
                      backgroundColor: point.severity === "High" ? "rgba(239, 68, 68, 0.8)" :
                                       point.severity === "Medium" ? "rgba(245, 158, 11, 0.8)" :
                                       "rgba(34, 197, 94, 0.8)"
                    }}
                    title={`${point.type} alert at ${point.timestamp}`}
                  >
                    <AlertTriangle size={14} className="text-white" />
                  </div>
                ))}
                
                {/* Mock vehicle location */}
                <div 
                  className="absolute w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                  style={{ top: '45%', left: '60%' }}
                >
                  <Car size={16} className="text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car size={20} />
                <span>Vehicle Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Current Vehicle</h3>
                    <div className="p-3 border rounded-md">
                      <div className="font-medium">Toyota Camry (VH-1234)</div>
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge>Active</Badge>
                      </div>
                      <div className="flex justify-between mt-1 text-sm">
                        <span className="text-muted-foreground">Speed:</span>
                        <span>65 mph</span>
                      </div>
                      <div className="flex justify-between mt-1 text-sm">
                        <span className="text-muted-foreground">Driver:</span>
                        <span>Michael J.</span>
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-medium mt-4">Recent Alerts</h3>
                    <div className="space-y-2">
                      {mockAlertPoints.map(point => (
                        <div key={point.id} className="flex justify-between items-center p-2 border rounded-md">
                          <div className="flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${
                              point.severity === "High" ? "bg-red-500" :
                              point.severity === "Medium" ? "bg-amber-500" :
                              "bg-green-500"
                            }`}></div>
                            <span className="text-sm">{point.type}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock size={12} />
                            <span>{point.timestamp}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="mt-4">
                  <div className="flex flex-col items-center justify-center h-32 text-center">
                    <Calendar size={24} className="mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Select a date to view trip history
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">Select Date</Button>
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

export default GPSTracking;
