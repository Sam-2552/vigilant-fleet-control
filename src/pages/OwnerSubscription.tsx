
import React from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileMinus, CheckCircle, XCircle, HelpCircle } from "lucide-react";

const OwnerSubscription = () => {
  const location = useLocation();
  const role = location.state?.role || "owner";

  const subscriptionData = {
    plan: "Premium",
    status: "Active",
    startDate: "2025-01-15",
    nextBilling: "2025-06-15",
    vehicleAllowance: 10,
    activeVehicles: 7,
    price: "$199/month"
  };

  const paymentHistory = [
    { id: 1, date: "2025-05-15", amount: "$199.00", status: "Paid", invoice: "INV-20250515" },
    { id: 2, date: "2025-04-15", amount: "$199.00", status: "Paid", invoice: "INV-20250415" },
    { id: 3, date: "2025-03-15", amount: "$199.00", status: "Paid", invoice: "INV-20250315" },
    { id: 4, date: "2025-02-15", amount: "$199.00", status: "Paid", invoice: "INV-20250215" },
  ];

  const features = [
    { name: "GPS Tracking", included: true },
    { name: "Driver Video", included: true },
    { name: "Analytics Dashboard", included: true },
    { name: "Email Alerts", included: true },
    { name: "SMS Alerts", included: true },
    { name: "24/7 Support", included: false }
  ];

  return (
    <Layout role={role} pageTitle="Owner Subscription">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Subscription Management</h2>
          <p className="text-muted-foreground">
            Manage your subscription plan, billing cycles, and upgrades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileMinus size={20} />
                <span>Subscription Details</span>
              </CardTitle>
              <CardDescription>
                Your current subscription plan and details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-lg">{subscriptionData.plan} Plan</p>
                  <p className="text-sm text-muted-foreground">{subscriptionData.price}</p>
                </div>
                <Badge>{subscriptionData.status}</Badge>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                  <p>{subscriptionData.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Next Billing Date</p>
                  <p>{subscriptionData.nextBilling}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Vehicle Allowance</p>
                  <p>{subscriptionData.vehicleAllowance}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Vehicles</p>
                  <p>{subscriptionData.activeVehicles} of {subscriptionData.vehicleAllowance}</p>
                </div>
              </div>
              
              <div className="h-2 bg-gray-200 rounded-full mt-4">
                <div 
                  className="h-full bg-primary rounded-full" 
                  style={{ width: `${(subscriptionData.activeVehicles / subscriptionData.vehicleAllowance) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-center text-muted-foreground">
                {subscriptionData.activeVehicles} of {subscriptionData.vehicleAllowance} vehicles used
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Change Plan</Button>
              <Button>Add Vehicles</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Plan Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-sm">{feature.name}</span>
                    {feature.included ? (
                      <CheckCircle size={16} className="text-green-500" />
                    ) : (
                      <XCircle size={16} className="text-gray-300" />
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full flex items-center gap-1">
                <HelpCircle size={14} />
                Contact Support
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map(payment => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.invoice}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Download</Button>
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

export default OwnerSubscription;
