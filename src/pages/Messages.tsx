
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Send, PaperclipIcon } from "lucide-react";

const Messages = () => {
  const location = useLocation();
  const role = location.state?.role || "driver";
  
  const [newMessage, setNewMessage] = useState("");
  
  const mockMessages = [
    {
      id: 1,
      sender: "John Owner",
      role: "owner",
      content: "Hey there! How's your trip going?",
      timestamp: "10:23 AM"
    },
    {
      id: 2,
      sender: "Michael Driver",
      role: "driver",
      content: "All good so far, just taking a short break at the rest stop.",
      timestamp: "10:25 AM"
    },
    {
      id: 3,
      sender: "John Owner",
      role: "owner",
      content: "Great! The system showed some alerts earlier. Everything ok?",
      timestamp: "10:28 AM"
    },
    {
      id: 4,
      sender: "Michael Driver",
      role: "driver",
      content: "Yes, I think it was a false alert when I was adjusting my sunglasses. The road is clear and I'm alert.",
      timestamp: "10:30 AM"
    }
  ];
  
  const handleSend = () => {
    if (newMessage.trim() === "") return;
    // In a real app, this would send the message to the backend
    setNewMessage("");
  };

  return (
    <Layout role={role} pageTitle="Messages">
      <div className="space-y-6 h-[calc(100vh-9rem)]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Messaging System</h2>
          <p className="text-muted-foreground">
            {role === "driver" 
              ? "Communicate directly with your fleet owner" 
              : "Communicate with your drivers"}
          </p>
        </div>

        <Card className="flex flex-col h-[calc(100vh-15rem)]">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare size={20} />
              <span>
                {role === "driver" ? "Chat with Fleet Owner" : "Chat with Driver"}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 pb-4">
              {mockMessages.map(msg => (
                <div key={msg.id} className={`flex ${msg.role === role ? "justify-end" : "justify-start"}`}>
                  <div className={`flex items-start gap-2 max-w-[70%] ${msg.role === role ? "flex-row-reverse" : ""}`}>
                    <Avatar className="w-8 h-8 bg-primary text-white">
                      <span>{msg.sender[0]}</span>
                    </Avatar>
                    <div className={`rounded-lg p-3 ${
                      msg.role === role 
                      ? "bg-primary text-white" 
                      : "bg-muted"
                    }`}>
                      <p>{msg.content}</p>
                      <span className="text-xs opacity-70 block text-right mt-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <PaperclipIcon size={20} />
              </Button>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Messages;
