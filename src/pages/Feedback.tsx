
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FeedbackForm from "@/components/feedback/FeedbackForm";

const Feedback = () => {
  const location = useLocation();
  const role = location.state?.role || "driver";
  
  return (
    <Layout role={role} pageTitle="Feedback System">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Submit Feedback</h2>
          <p className="text-muted-foreground">
            Provide feedback on alerts - whether they were accurate, false, or annoying.
            Your input helps us improve the alert algorithm.
          </p>
        </div>
        <div className="mt-6">
          <FeedbackForm />
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
