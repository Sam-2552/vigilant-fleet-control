
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Check, ToggleRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EnableFeatures = () => {
  const location = useLocation();
  const role = location.state?.role || "admin";
  const { toast } = useToast();
  
  const [features, setFeatures] = useState({
    videoRecording: true,
    gpsTracking: true,
    mobileDetection: true,
    yawnDetection: false,
    smokingDetection: true,
    realTimeAlerts: true
  });
  
  const [clientScope, setClientScope] = useState("all");

  const handleFeatureToggle = (feature: string) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature as keyof typeof prev]
    }));
  };
  
  const handleSave = () => {
    toast({
      title: "Features Updated",
      description: `Changes applied to ${clientScope === "all" ? "all clients" : "selected clients"}`,
      action: <Check className="text-green-600" size={18} />
    });
  };

  return (
    <Layout role={role} pageTitle="Enable Features">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Feature Management</h2>
          <p className="text-muted-foreground">
            Enable or disable features for specific clients
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ToggleRight size={20} />
              <span>Feature Toggle Control</span>
            </CardTitle>
            <CardDescription>
              Toggle system features on or off for clients
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {Object.entries(features).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <Label htmlFor={key} className="flex-grow">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </Label>
                  <Switch 
                    id={key}
                    checked={value}
                    onCheckedChange={() => handleFeatureToggle(key)}
                  />
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="font-medium text-sm">Apply Changes To:</h3>
              <div className="flex gap-4">
                <Button 
                  variant={clientScope === "all" ? "default" : "outline"}
                  onClick={() => setClientScope("all")}
                >
                  All Clients
                </Button>
                <Button
                  variant={clientScope === "selected" ? "default" : "outline"}
                  onClick={() => setClientScope("selected")}
                >
                  Selected Clients
                </Button>
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button onClick={handleSave}>Save & Apply Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EnableFeatures;
