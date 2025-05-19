
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileMinus, ChevronUp, ChevronDown, Users, Car, BadgeCheck, XCircle } from "lucide-react";

const ClientSubscription = () => {
  const location = useLocation();
  const role = location.state?.role || "client";

  const subscriptionData = {
    plan: "Enterprise",
    status: "Active",
    startDate: "2025-01-01",
    nextBilling: "2026-01-01",
    maxOwners: 15,
    activeOwners: 8,
    maxVehicles: 150,
    activeVehicles: 86
  };

  const mockOwners = [
    { id: 1, name: "John Smith", company: "Fleet Management Inc.", vehicles: 32, drivers: 45 },
    { id: 2, name: "Sarah Johnson", company: "City Logistics", vehicles: 18, drivers: 22 },
    { id: 3, name: "Robert Wilson", company: "Express Delivery Co.", vehicles: 36, drivers: 42 },
  ];

  return (
    <Layout role={role} pageTitle="Client Subscription">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Subscription Management</h2>
          <p className="text-muted-foreground">
            Manage your organization's subscription, owners, and vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Card className="md:col-span-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileMinus size={20} />
                <span>Subscription Details</span>
              </CardTitle>
              <CardDescription>
                Your organization's subscription plan information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-lg">{subscriptionData.plan} Plan</p>
                  <p className="text-muted-foreground">Annual commitment</p>
                </div>
                <Badge>{subscriptionData.status}</Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                  <p>{subscriptionData.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Renewal Date</p>
                  <p>{subscriptionData.nextBilling}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Owner Slots</p>
                  <div className="flex items-center gap-2">
                    <p>{subscriptionData.activeOwners} of {subscriptionData.maxOwners}</p>
                    <Badge variant="outline" className="ml-2">
                      {(subscriptionData.activeOwners / subscriptionData.maxOwners * 100).toFixed(0)}%
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Vehicles</p>
                  <div className="flex items-center gap-2">
                    <p>{subscriptionData.activeVehicles} of {subscriptionData.maxVehicles}</p>
                    <Badge variant="outline" className="ml-2">
                      {(subscriptionData.activeVehicles / subscriptionData.maxVehicles * 100).toFixed(0)}%
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Owner Usage</span>
                    <span>{subscriptionData.activeOwners}/{subscriptionData.maxOwners}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${(subscriptionData.activeOwners / subscriptionData.maxOwners) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Vehicle Usage</span>
                    <span>{subscriptionData.activeVehicles}/{subscriptionData.maxVehicles}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${(subscriptionData.activeVehicles / subscriptionData.maxVehicles) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Button variant="outline">Change Plan</Button>
              <Button>Add Owner Slots</Button>
              <Button variant="secondary">Add Vehicle Capacity</Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Plan Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span className="text-sm">Up to {subscriptionData.maxOwners} Owners</span>
                  </div>
                  <BadgeCheck size={16} className="text-green-500" />
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Car size={16} />
                    <span className="text-sm">Up to {subscriptionData.maxVehicles} Vehicles</span>
                  </div>
                  <BadgeCheck size={16} className="text-green-500" />
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16V12L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="text-sm">24/7 Priority Support</span>
                  </div>
                  <BadgeCheck size={16} className="text-green-500" />
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 11H20" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 16H15" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 3L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M16 3L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm">Extended History</span>
                  </div>
                  <BadgeCheck size={16} className="text-green-500" />
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm">Data Export</span>
                  </div>
                  <BadgeCheck size={16} className="text-green-500" />
                </li>
                <li className="flex justify-between text-muted">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 3V21" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="text-sm">White Labeling</span>
                  </div>
                  <XCircle size={16} className="text-gray-300" />
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={20} />
              <span>Registered Fleet Owners</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Owner Name</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Vehicles</TableHead>
                  <TableHead>Drivers</TableHead>
                  <TableHead>Utilization</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOwners.map(owner => (
                  <TableRow key={owner.id}>
                    <TableCell className="font-medium">{owner.name}</TableCell>
                    <TableCell>{owner.company}</TableCell>
                    <TableCell>{owner.vehicles}</TableCell>
                    <TableCell>{owner.drivers}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="h-2 w-24 bg-gray-200 rounded-full mr-2">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${(owner.vehicles / 40) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{Math.round((owner.vehicles / 40) * 100)}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <ChevronUp size={14} className="mr-1 text-green-600" />
                          Add
                        </Button>
                        <Button variant="outline" size="sm">
                          <ChevronDown size={14} className="mr-1 text-red-600" />
                          Remove
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

export default ClientSubscription;
