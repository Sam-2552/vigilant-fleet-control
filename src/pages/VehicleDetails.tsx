
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Car, Calendar, Info, Edit } from "lucide-react";

const VehicleDetails = () => {
  const location = useLocation();
  const role = location.state?.role || "driver";

  const vehicleData = {
    id: "VH-12345",
    registration: "ABC-1234",
    model: "Toyota Camry",
    year: "2023",
    vin: "1HGBH41JXMN109186",
    obdId: "OBD-98765",
    installDate: "2025-01-15",
    lastService: "2025-04-10",
    nextService: "2025-07-10",
    status: "Active"
  };

  return (
    <Layout role={role} pageTitle="Vehicle Details">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Vehicle Information</h2>
            <p className="text-muted-foreground">
              Check information about {role === "driver" ? "your assigned vehicle" : "this vehicle"}
            </p>
          </div>
          {role === "owner" && (
            <Button className="flex items-center gap-2">
              <Edit size={16} />
              Edit Vehicle
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car size={20} />
                <span>Basic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Vehicle ID</p>
                  <p className="font-medium">{vehicleData.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Registration</p>
                  <p className="font-medium">{vehicleData.registration}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Model</p>
                  <p className="font-medium">{vehicleData.model}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Year</p>
                  <p className="font-medium">{vehicleData.year}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">VIN</p>
                  <p className="font-medium">{vehicleData.vin}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <p className="font-medium">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      {vehicleData.status}
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info size={20} />
                <span>DDAS System Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">OBD ID</p>
                  <p className="font-medium">{vehicleData.obdId}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Install Date</p>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <p className="font-medium">{vehicleData.installDate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Last Service</p>
                  <p className="font-medium">{vehicleData.lastService}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Next Service</p>
                  <p className="font-medium">{vehicleData.nextService}</p>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">System Health</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-4/5"></div>
                </div>
                <span className="text-sm">80%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default VehicleDetails;
