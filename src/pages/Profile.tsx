
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { User, Mail, Phone, Shield, Key } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const location = useLocation();
  const role = location.state?.role || "driver";
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved."
    });
  };

  const handleChangePassword = () => {
    toast({
      title: "Password Reset Email Sent",
      description: "Check your email for instructions to reset your password."
    });
  };

  return (
    <Layout role={role} pageTitle="Profile">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Profile</h2>
          <p className="text-muted-foreground">
            View and update your profile information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <div className="flex h-full w-full items-center justify-center bg-primary text-3xl text-white">
                    {role.charAt(0).toUpperCase()}
                  </div>
                </Avatar>
              </div>
              <CardTitle>{role === "driver" ? "Michael Driver" : role === "owner" ? "John Owner" : role === "client" ? "ABC Logistics" : "Admin User"}</CardTitle>
              <p className="text-sm text-muted-foreground capitalize">{role}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>user@example.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+1 555-123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="capitalize">{role} Account</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={handleChangePassword}>
                <Key className="mr-2 h-4 w-4" />
                Change Password
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User size={20} />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue={role === "driver" ? "Michael" : role === "owner" ? "John" : "Admin"} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue={role === "driver" ? "Driver" : role === "owner" ? "Owner" : "User"} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="user@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 555-123-4567" />
              </div>

              {role === "driver" && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="license">Driver License Number</Label>
                    <Input id="license" defaultValue="DL12345678" />
                  </div>
                </>
              )}

              {role === "owner" && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" defaultValue="Fleet Management Inc." />
                  </div>
                </>
              )}

              {role === "client" && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input id="organization" defaultValue="ABC Logistics" />
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
