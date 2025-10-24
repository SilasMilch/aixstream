import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Video, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Create Request",
      description: "Post your stream request with location, payment rate, and description"
    },
    {
      icon: Users,
      title: "Reporter Accepts",
      description: "Nearby reporters see your request and accept the bounty"
    },
    {
      icon: Video,
      title: "Live Streaming",
      description: "Reporter livestreams from the location, you watch in real-time"
    },
    {
      icon: Shield,
      title: "Automatic Payment",
      description: "USDC payments processed per minute via smart contract on Base"
    }
  ];
  
  return (
    <section id="how" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A decentralized marketplace for real-time journalism
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-card text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP {index + 1}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
