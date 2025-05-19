
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, MapPin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Logs = () => {
  const location = useLocation();
  const role = location.state?.role || "driver";

  const mockLogs = [
    { 
      id: 1, 
      tripId: "T-12345", 
      start: "2025-05-18 08:30:00", 
      end: "2025-05-18 12:45:00",
      duration: "4h 15m",
      alerts: 3,
      alertTypes: ["Distraction", "Mobile", "Yawning"],
      route: "New York to Philadelphia"
    },
    { 
      id: 2, 
      tripId: "T-12346", 
      start: "2025-05-17 14:20:00", 
      end: "2025-05-17 18:10:00",
      duration: "3h 50m",
      alerts: 1,
      alertTypes: ["Mobile"],
      route: "Philadelphia to Washington DC"
    },
    { 
      id: 3, 
      tripId: "T-12347", 
      start: "2025-05-16 09:15:00", 
      end: "2025-05-16 15:40:00",
      duration: "6h 25m",
      alerts: 5,
      alertTypes: ["Distraction", "Mobile", "Smoking", "Yawning", "Distraction"],
      route: "Washington DC to Richmond"
    }
  ];

  return (
    <Layout role={role} pageTitle="Logs">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Driving Logs</h2>
            <p className="text-muted-foreground">
              Review your historical driving logs and alerts
            </p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Export Logs
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText size={20} />
              <span>Session History</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trip ID</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>End Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Alerts</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLogs.map(log => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.tripId}</TableCell>
                    <TableCell>{log.start}</TableCell>
                    <TableCell>{log.end}</TableCell>
                    <TableCell>{log.duration}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {log.route}
                      </div>
                    </TableCell>
                    <TableCell>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Badge variant={log.alerts > 3 ? "destructive" : "default"}>
                            {log.alerts} alerts
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Alert Details:</p>
                            <ul className="text-xs space-y-1">
                              {log.alertTypes.map((alert, idx) => (
                                <li key={idx}>• {alert}</li>
                              ))}
                            </ul>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">View Details</Button>
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

export default Logs;
