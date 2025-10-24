import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";

interface StreamRequestProps {
  title: string;
  location: string;
  paymentRate: number;
  duration: string;
  status: "active" | "in-progress" | "completed";
  description: string;
}

const StreamRequest = ({ title, location, paymentRate, duration, status, description }: StreamRequestProps) => {
  const statusColors = {
    active: "bg-accent text-accent-foreground",
    "in-progress": "bg-primary text-primary-foreground",
    completed: "bg-muted text-muted-foreground"
  };
  
  const statusLabels = {
    active: "LIVE REQUEST",
    "in-progress": "STREAMING",
    completed: "COMPLETED"
  };
  
  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge className={`${statusColors[status]} live-indicator`}>
            {statusLabels[status]}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="font-semibold">{paymentRate} USDC/min</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        {status === "active" && (
          <Button className="w-full">Accept & Start Streaming</Button>
        )}
        {status === "in-progress" && (
          <Button variant="secondary" className="w-full">View Stream</Button>
        )}
        {status === "completed" && (
          <Button variant="outline" className="w-full">View Recording</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default StreamRequest;
