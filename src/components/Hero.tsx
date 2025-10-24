import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Video } from "lucide-react";

const Hero = () => {
  return (
  <section id="home" className="gradient-hero text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">Powered by Base Network</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Real-Time Journalism,
            <br />
            On-Demand
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Pay reporters to livestream from any location. Get authentic footage when news breaks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Request a Stream
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/20">
              Become a Reporter
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Location-Based</h3>
              <p className="text-sm text-primary-foreground/80">
                Request streams from specific GPS coordinates
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <DollarSign className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Pay Per Minute</h3>
              <p className="text-sm text-primary-foreground/80">
                Set your rate in USDC on Base network
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Video className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Own the Rights</h3>
              <p className="text-sm text-primary-foreground/80">
                Full commercial rights to the footage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
