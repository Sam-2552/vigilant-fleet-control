
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import DashboardView from "@/components/dashboard/DashboardView";

const Dashboard = () => {
  const location = useLocation();
  // Get the role from location state, defaulting to "driver" if not present
  const role = location.state?.role || "driver";
  
  return (
    <Layout role={role} pageTitle="Dashboard">
      <DashboardView role={role} />
    </Layout>
  );
};

export default Dashboard;
