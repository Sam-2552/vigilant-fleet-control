
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileMinus, Download } from "lucide-react";

const FaultyLogs = () => {
  const location = useLocation();
  const role = location.state?.role || "admin";

  const mockLogs = [
    { 
      id: 1, 
      vehicleId: "VH-1234", 
      errorCode: "OBD-421", 
      description: "Oxygen Sensor Circuit Low Voltage", 
      timestamp: "2025-05-18 09:45:23", 
      status: "Unresolved" 
    },
    { 
      id: 2, 
      vehicleId: "VH-5678", 
      errorCode: "CAM-301", 
      description: "Camera Connection Lost", 
      timestamp: "2025-05-18 11:32:10", 
      status: "Resolved" 
    },
    { 
      id: 3, 
      vehicleId: "VH-9012", 
      errorCode: "GPS-104", 
      description: "GPS Signal Interference", 
      timestamp: "2025-05-17 15:22:47", 
      status: "Unresolved" 
    },
    { 
      id: 4, 
      vehicleId: "VH-3456", 
      errorCode: "OBD-173", 
      description: "Engine Temperature Sensor Circuit", 
      timestamp: "2025-05-17 08:12:36", 
      status: "Resolved" 
    }
  ];

  return (
    <Layout role={role} pageTitle="System Logs">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Faulty/OBD Logs</h2>
            <p className="text-muted-foreground">
              Review OBD and system fault logs
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
              <FileMinus size={20} />
              <span>System Error Logs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vehicle ID</TableHead>
                  <TableHead>Error Code</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLogs.map(log => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.vehicleId}</TableCell>
                    <TableCell>{log.errorCode}</TableCell>
                    <TableCell>{log.description}</TableCell>
                    <TableCell>{log.timestamp}</TableCell>
                    <TableCell>
                      <Badge variant={log.status === "Resolved" ? "outline" : "destructive"}>
                        {log.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Details</Button>
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

export default FaultyLogs;
