import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ActiveRequests from "@/components/ActiveRequests";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ActiveRequests />
      
      <footer className="bg-card border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 AixStream. Decentralized journalism on Base.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
