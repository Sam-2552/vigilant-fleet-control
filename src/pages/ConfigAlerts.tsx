
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Settings, Save, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConfigAlerts = () => {
  const location = useLocation();
  const role = location.state?.role || "admin";
  const { toast } = useToast();
  
  // States for alert thresholds
  const [distractionThreshold, setDistractionThreshold] = useState<number>(50);
  const [yawnThreshold, setYawnThreshold] = useState<number>(40);
  const [mobileThreshold, setMobileThreshold] = useState<number>(60);
  
  // States for feature toggles
  const [distractionDetection, setDistractionDetection] = useState<boolean>(true);
  const [yawnDetection, setYawnDetection] = useState<boolean>(true);
  const [mobileDetection, setMobileDetection] = useState<boolean>(true);
  const [smokingDetection, setSmokingDetection] = useState<boolean>(false);
  
  // State for applying globally or per client
  const [applyGlobally, setApplyGlobally] = useState<string>("global");

  const handleSaveChanges = () => {
    console.log({
      thresholds: {
        distraction: distractionThreshold,
        yawn: yawnThreshold,
        mobile: mobileThreshold
      },
      features: {
        distractionDetection,
        yawnDetection,
        mobileDetection,
        smokingDetection
      },
      applyGlobally: applyGlobally === "global"
    });
    
    toast({
      title: "Settings Saved",
      description: "Alert configuration has been updated successfully.",
    });
  };

  return (
    <Layout role={role} pageTitle="Alert Configuration">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Alert Configuration</h2>
            <p className="text-muted-foreground">
              Configure alert thresholds, toggle features, and apply settings globally or per client.
            </p>
          </div>
          <Button onClick={handleSaveChanges} className="flex items-center gap-2">
            <Save size={16} />
            Save Changes
          </Button>
        </div>

        <Alert variant="default" className="bg-yellow-50 border-yellow-200">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="text-yellow-800">Important</AlertTitle>
          <AlertDescription className="text-yellow-700">
            Changes made here will affect how alerts are triggered and may impact driver monitoring.
            Please ensure settings are appropriate for your organization.
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="thresholds">
          <TabsList>
            <TabsTrigger value="thresholds">Alert Thresholds</TabsTrigger>
            <TabsTrigger value="features">Feature Toggles</TabsTrigger>
            <TabsTrigger value="apply">Apply Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="thresholds" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings size={18} />
                  Define Alert Thresholds
                </CardTitle>
                <CardDescription>
                  Set the sensitivity level for different types of alerts. Higher values mean more sensitive detection.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="distraction-threshold">Distraction Detection Sensitivity</Label>
                      <span className="text-sm font-medium">
                        {distractionThreshold < 30 ? "Low" : distractionThreshold < 70 ? "Medium" : "High"}
                        {" "}({distractionThreshold}%)
                      </span>
                    </div>
                    <Slider
                      id="distraction-threshold"
                      min={0}
                      max={100}
                      step={1}
                      value={[distractionThreshold]}
                      onValueChange={(values) => setDistractionThreshold(values[0])}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="yawn-threshold">Yawn Detection Sensitivity</Label>
                      <span className="text-sm font-medium">
                        {yawnThreshold < 30 ? "Low" : yawnThreshold < 70 ? "Medium" : "High"}
                        {" "}({yawnThreshold}%)
                      </span>
                    </div>
                    <Slider
                      id="yawn-threshold"
                      min={0}
                      max={100}
                      step={1}
                      value={[yawnThreshold]}
                      onValueChange={(values) => setYawnThreshold(values[0])}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="mobile-threshold">Mobile Usage Detection Sensitivity</Label>
                      <span className="text-sm font-medium">
                        {mobileThreshold < 30 ? "Low" : mobileThreshold < 70 ? "Medium" : "High"}
                        {" "}({mobileThreshold}%)
                      </span>
                    </div>
                    <Slider
                      id="mobile-threshold"
                      min={0}
                      max={100}
                      step={1}
                      value={[mobileThreshold]}
                      onValueChange={(values) => setMobileThreshold(values[0])}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings size={18} />
                  Feature Toggles
                </CardTitle>
                <CardDescription>
                  Enable or disable specific alert features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="distraction-detection" className="font-medium">Distraction Detection</Label>
                      <p className="text-sm text-muted-foreground">
                        Detects when driver's attention is not on the road
                      </p>
                    </div>
                    <Switch 
                      id="distraction-detection" 
                      checked={distractionDetection}
                      onCheckedChange={setDistractionDetection}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="yawn-detection" className="font-medium">Yawn Detection</Label>
                      <p className="text-sm text-muted-foreground">
                        Detects fatigue through yawning patterns
                      </p>
                    </div>
                    <Switch 
                      id="yawn-detection" 
                      checked={yawnDetection}
                      onCheckedChange={setYawnDetection}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="mobile-detection" className="font-medium">Mobile Usage Detection</Label>
                      <p className="text-sm text-muted-foreground">
                        Detects when driver is using mobile phone
                      </p>
                    </div>
                    <Switch 
                      id="mobile-detection" 
                      checked={mobileDetection}
                      onCheckedChange={setMobileDetection}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smoking-detection" className="font-medium">Smoking Detection</Label>
                      <p className="text-sm text-muted-foreground">
                        Detects smoking behavior while driving (Beta)
                      </p>
                    </div>
                    <Switch 
                      id="smoking-detection" 
                      checked={smokingDetection}
                      onCheckedChange={setSmokingDetection}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings size={18} />
                  Apply Settings
                </CardTitle>
                <CardDescription>
                  Choose to apply these settings globally or to specific clients.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup
                  value={applyGlobally}
                  onValueChange={setApplyGlobally}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="global" id="global" />
                    <Label htmlFor="global" className="font-medium">
                      Apply Globally to All Clients
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="specific" id="specific" />
                    <Label htmlFor="specific" className="font-medium">
                      Apply to Specific Clients
                    </Label>
                  </div>
                </RadioGroup>

                {applyGlobally === "specific" && (
                  <div className="pt-4">
                    <Label className="mb-2 block">Select Clients</Label>
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="client1" className="mr-2" />
                        <Label htmlFor="client1">ABC Logistics</Label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="client2" className="mr-2" />
                        <Label htmlFor="client2">XYZ Transport</Label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="client3" className="mr-2" />
                        <Label htmlFor="client3">123 Shipping</Label>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveChanges} className="flex items-center gap-2">
                  <Save size={16} />
                  Save & Push Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ConfigAlerts;
