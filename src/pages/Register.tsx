
import React from "react";
import RegisterForm from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30">
      <div className="w-full max-w-md p-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">DDAS</h1>
          <p className="text-muted-foreground">Driver Distraction Alert System</p>
        </div>
        <RegisterForm />
        <div className="text-center mt-8">
          <Button 
            variant="ghost" 
            className="text-muted-foreground"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
