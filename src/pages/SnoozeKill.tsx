
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { BellOff, AlertTriangle, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SnoozeKill = () => {
  const location = useLocation();
  const role = location.state?.role || "driver";
  const { toast } = useToast();

  const [snoozeDuration, setSnoozeDuration] = useState("5");
  const [killReason, setKillReason] = useState("");
  
  const handleSnooze = () => {
    toast({
      title: "Alerts Snoozed",
      description: `Alerts have been snoozed for ${snoozeDuration} minutes.`,
    });
  };

  const handleKill = () => {
    if (!killReason) return;
    
    toast({
      title: "System Shut Down",
      description: "The alert system has been turned off.",
      variant: "destructive"
    });
  };

  return (
    <Layout role={role} pageTitle="Snooze/Kill Switch">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Alert Controls</h2>
          <p className="text-muted-foreground">
            Temporarily disable alerts or shut down the system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock size={20} />
                <span>Snooze Alerts</span>
              </CardTitle>
              <CardDescription>
                Temporarily mute alerts for a specified period
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select Duration</Label>
                <Select value={snoozeDuration} onValueChange={setSnoozeDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 minutes</SelectItem>
                    <SelectItem value="10">10 minutes</SelectItem>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={handleSnooze} className="w-full">
                Snooze Alerts
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <BellOff size={20} />
                <span>Kill Switch</span>
              </CardTitle>
              <CardDescription>
                Completely turn off the alert system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full">
                    Activate Kill Switch
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                      <AlertTriangle className="text-destructive" size={18} />
                      Kill Switch Confirmation
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      You are about to shut down the alert system completely. Please select a reason:
                    </AlertDialogDescription>
                    <div className="py-4">
                      <RadioGroup value={killReason} onValueChange={setKillReason}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="falseAlerts" id="falseAlerts" />
                          <Label htmlFor="falseAlerts">False Alerts</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="systemMalfunction" id="systemMalfunction" />
                          <Label htmlFor="systemMalfunction">System Malfunction</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="endOfShift" id="endOfShift" />
                          <Label htmlFor="endOfShift">End of Shift</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleKill} disabled={!killReason}>Confirm</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SnoozeKill;
