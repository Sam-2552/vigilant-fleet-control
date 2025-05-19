
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Edit, Save, Building, Mail, Phone, MapPin, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ClientDetails = () => {
  const location = useLocation();
  const role = location.state?.role || "client";
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const clientData = {
    name: "ABC Logistics Inc.",
    industry: "Transportation",
    contactPerson: "James Wilson",
    email: "james@abclogistics.com",
    phone: "+1 555-987-6543",
    address: "123 Corporate Blvd, Business City, ST 12345",
    website: "www.abclogistics.com",
    registrationDate: "2024-10-15",
    status: "Active",
    vehiclesCovered: 86,
    ownersRegistered: 8,
    driversRegistered: 109
  };

  const keyContacts = [
    { name: "James Wilson", position: "CEO", email: "james@abclogistics.com", phone: "+1 555-987-6543" },
    { name: "Emma Rodriguez", position: "Fleet Manager", email: "emma@abclogistics.com", phone: "+1 555-123-4567" },
    { name: "Michael Chen", position: "Safety Officer", email: "michael@abclogistics.com", phone: "+1 555-234-5678" }
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Changes Saved",
      description: "Client information has been updated successfully."
    });
  };

  return (
    <Layout role={role} pageTitle="Client Details">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Company Profile</h2>
            <p className="text-muted-foreground">
              View and manage client organization information
            </p>
          </div>
          {role === "admin" && (
            <Button 
              className="flex items-center gap-2"
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            >
              {isEditing ? (
                <>
                  <Save size={16} />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit size={16} />
                  Edit Details
                </>
              )}
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building size={20} />
                <span>Organization Information</span>
              </CardTitle>
              <CardDescription>
                {isEditing ? "Edit the client details below" : "Basic information about the client organization"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input 
                    id="companyName" 
                    defaultValue={clientData.name} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input 
                    id="industry" 
                    defaultValue={clientData.industry} 
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-muted-foreground" />
                  <Input 
                    id="address" 
                    defaultValue={clientData.address} 
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Primary Contact</Label>
                  <Input 
                    id="contactPerson" 
                    defaultValue={clientData.contactPerson} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input 
                    id="website" 
                    defaultValue={clientData.website} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2 text-muted-foreground" />
                    <Input 
                      id="email" 
                      defaultValue={clientData.email} 
                      type="email"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2 text-muted-foreground" />
                    <Input 
                      id="phone" 
                      defaultValue={clientData.phone} 
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
              
              {role === "admin" && (
                <>
                  <Separator />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <div className="flex items-center">
                        <Shield size={16} className="mr-2 text-muted-foreground" />
                        <Input 
                          id="status" 
                          defaultValue={clientData.status} 
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registrationDate">Registration Date</Label>
                      <Input 
                        id="registrationDate" 
                        defaultValue={clientData.registrationDate} 
                        disabled={true}
                      />
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {clientData.status}
                  </Badge>
                </div>
                <Separator />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Vehicles Covered</p>
                  <p className="text-2xl font-semibold">{clientData.vehiclesCovered}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Fleet Owners</p>
                  <p className="text-2xl font-semibold">{clientData.ownersRegistered}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Registered Drivers</p>
                  <p className="text-2xl font-semibold">{clientData.driversRegistered}</p>
                </div>
                <div className="pt-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Enterprise Client
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={20} />
              <span>Key Contacts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  {isEditing && <TableHead>Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {keyContacts.map((contact, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.position}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    {isEditing && (
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          {isEditing && (
            <CardFooter>
              <Button variant="outline" className="ml-auto">Add Contact</Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default ClientDetails;
