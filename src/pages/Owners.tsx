
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Users, Eye } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Owners = () => {
  const location = useLocation();
  const role = location.state?.role || "client";

  const mockOwners = [
    { 
      id: 1, 
      name: "John Smith", 
      company: "Fleet Management Inc.", 
      email: "john@fleetmanagement.com", 
      phone: "555-123-4567",
      vehicles: 7,
      drivers: 12,
      plan: "Premium",
      status: "Active"
    },
    { 
      id: 2, 
      name: "Sarah Johnson", 
      company: "City Logistics", 
      email: "sarah@citylogistics.com", 
      phone: "555-234-5678",
      vehicles: 4,
      drivers: 5,
      plan: "Standard",
      status: "Active"
    },
    { 
      id: 3, 
      name: "Robert Wilson", 
      company: "Express Delivery Co.", 
      email: "robert@expressdelivery.com", 
      phone: "555-345-6789",
      vehicles: 10,
      drivers: 15,
      plan: "Premium",
      status: "Suspended"
    }
  ];

  return (
    <Layout role={role} pageTitle="Owner Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Fleet Owners</h2>
            <p className="text-muted-foreground">
              Manage fleet owners registered under your account
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle size={16} />
            Add Owner
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={20} />
              <span>Owner List</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Owner</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Vehicles</TableHead>
                  <TableHead>Subscription</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOwners.map(owner => (
                  <TableRow key={owner.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <div className="flex h-full w-full items-center justify-center bg-primary text-white">
                            {owner.name[0]}
                          </div>
                        </Avatar>
                        <span className="font-medium">{owner.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{owner.company}</TableCell>
                    <TableCell>
                      <HoverCard>
                        <HoverCardTrigger className="cursor-pointer underline decoration-dotted">
                          Contact Info
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-1">
                            <p className="text-sm">
                              <span className="font-medium">Email:</span> {owner.email}
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Phone:</span> {owner.phone}
                            </p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell>
                      {owner.vehicles} vehicles / {owner.drivers} drivers
                    </TableCell>
                    <TableCell>
                      <Badge variant={owner.plan === "Premium" ? "default" : "outline"}>
                        {owner.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={owner.status === "Active" ? "outline" : "destructive"} className={
                        owner.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : ""
                      }>
                        {owner.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        View
                      </Button>
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

export default Owners;
