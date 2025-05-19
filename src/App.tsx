
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import ConfigAlerts from "./pages/ConfigAlerts";
import Clients from "./pages/Clients";
import EnableFeatures from "./pages/EnableFeatures";
import FaultyLogs from "./pages/FaultyLogs";
import Messages from "./pages/Messages";
import Logs from "./pages/Logs";
import VehicleDetails from "./pages/VehicleDetails";
import SnoozeKill from "./pages/SnoozeKill";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Drivers from "./pages/Drivers";
import DriversVideo from "./pages/DriversVideo";
import GPSTracking from "./pages/GPSTracking";
import Notifications from "./pages/Notifications";
import OwnerSubscription from "./pages/OwnerSubscription";
import Owners from "./pages/Owners";
import ClientSubscription from "./pages/ClientSubscription";
import ClientDetails from "./pages/ClientDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/config-alerts" element={<ConfigAlerts />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/enable-features" element={<EnableFeatures />} />
          <Route path="/faulty-logs" element={<FaultyLogs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/vehicle-details" element={<VehicleDetails />} />
          <Route path="/snooze-kill" element={<SnoozeKill />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/drivers-video" element={<DriversVideo />} />
          <Route path="/gps-tracking" element={<GPSTracking />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/owner-subscription" element={<OwnerSubscription />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/client-subscription" element={<ClientSubscription />} />
          <Route path="/client-details" element={<ClientDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
