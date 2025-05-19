
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Users, Eye } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Drivers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = location.state?.role || "owner";

  const mockDrivers = [
    { 
      id: 1, 
      name: "Michael Johnson", 
      age: 35, 
      experience: "8 years", 
      license: "DL-12345",
      vehicle: "VH-1234 (Toyota Camry)",
      status: "Active",
      alertCount: 2,
      photo: null
    },
    { 
      id: 2, 
      name: "Sarah Williams", 
      age: 28, 
      experience: "5 years", 
      license: "DL-23456",
      vehicle: "VH-5678 (Honda Accord)",
      status: "Active",
      alertCount: 0,
      photo: null
    },
    { 
      id: 3, 
      name: "David Brown", 
      age: 42, 
      experience: "15 years", 
      license: "DL-34567",
      vehicle: "VH-9012 (Ford F-150)",
      status: "Inactive",
      alertCount: 5,
      photo: null
    }
  ];

  return (
    <Layout role={role} pageTitle="Driver Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Drivers</h2>
            <p className="text-muted-foreground">
              Manage your drivers and review their profiles
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle size={16} />
            Add Driver
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={20} />
              <span>Driver List</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>License</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Alerts</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockDrivers.map(driver => (
                  <TableRow key={driver.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <div className="flex h-full w-full items-center justify-center bg-primary text-white">
                            {driver.name[0]}
                          </div>
                        </Avatar>
                        <div>
                          <p className="font-medium">{driver.name}</p>
                          <p className="text-xs text-muted-foreground">{driver.age} years old</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{driver.license}</TableCell>
                    <TableCell>{driver.vehicle}</TableCell>
                    <TableCell>{driver.experience}</TableCell>
                    <TableCell>
                      <Badge variant={driver.status === "Active" ? "default" : "secondary"}>
                        {driver.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {driver.alertCount > 0 ? (
                        <HoverCard>
                          <HoverCardTrigger>
                            <Badge variant={driver.alertCount > 3 ? "destructive" : "outline"}>
                              {driver.alertCount} recent
                            </Badge>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">Recent Alerts</h4>
                              <p className="text-sm">
                                This driver has had {driver.alertCount} alerts in the past 7 days.
                                Click "View" for more details.
                              </p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ) : (
                        <Badge variant="outline">None</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex items-center" onClick={() => navigate("/drivers-video", { state: { role, driverId: driver.id }})}>
                          <Eye size={14} className="mr-1" />
                          View
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Drivers;
