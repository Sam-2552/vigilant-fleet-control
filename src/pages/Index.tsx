
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, BarChart3, Car, Shield, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/30">
      {/* Header */}
      <header className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <AlertTriangle size={16} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">DDAS</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tighter">Driver Distraction Alert System</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive fleet management system with advanced driver monitoring capabilities
            to enhance safety and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link to="/register">
              <Button size="lg" className="px-8">Get Started</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">Log in</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <div className="p-2 w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Driver</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your alerts, provide feedback, and communicate with fleet managers.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link to="/register" className="w-full">
                <Button className="w-full">Register as Driver</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="p-2 w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Owner</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Manage your fleet, monitor drivers, and access detailed analytics.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link to="/register" className="w-full">
                <Button className="w-full">Register as Owner</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="p-2 w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Client</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Oversee multiple fleet owners and manage subscription plans.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link to="/register" className="w-full">
                <Button className="w-full">Register as Client</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="p-2 w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Admin</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Configure system settings, manage clients, and enable features.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link to="/register" className="w-full">
                <Button className="w-full">Register as Admin</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">DDAS</h3>
              <p className="text-primary-foreground/80">
                Driver Distraction Alert System - Enhancing road safety through advanced monitoring.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/login" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-primary-foreground/80">
                For support, please contact our team at support@ddas.com
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>© {new Date().getFullYear()} DDAS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
