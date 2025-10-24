import ConnectWallet from "@/components/ConnectWallet";
import { Radio } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radio className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">AixStream</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#requests" className="text-sm font-medium hover:text-primary transition-smooth">
            Browse Requests
          </a>
          <a href="#how" className="text-sm font-medium hover:text-primary transition-smooth">
            How It Works
          </a>
          <a href="#home" className="text-sm font-medium hover:text-primary transition-smooth">
            For Reporters
          </a>
        </div>
        
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Navbar;
