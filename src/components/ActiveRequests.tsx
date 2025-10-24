import StreamRequest from "./StreamRequest";

const ActiveRequests = () => {
  const requests = [
    {
      title: "Live Coverage: City Hall Protest",
      location: "City Hall, Downtown",
      paymentRate: 5,
      duration: "30 min requested",
      status: "active" as const,
      description: "Need live coverage of ongoing protest. Multiple angles preferred."
    },
    {
      title: "Fire at Industrial Complex",
      location: "Industrial District, Sector 7",
      paymentRate: 8,
      duration: "Ongoing",
      status: "in-progress" as const,
      description: "Large fire reported. Need immediate on-ground coverage."
    },
    {
      title: "Breaking: Traffic Accident",
      location: "Highway 101, Exit 42",
      paymentRate: 3,
      duration: "15 min requested",
      status: "active" as const,
      description: "Major accident blocking traffic. Need quick verification footage."
    },
    {
      title: "Concert Event Coverage",
      location: "Central Park Amphitheater",
      paymentRate: 4,
      duration: "2 hours requested",
      status: "active" as const,
      description: "Looking for live coverage of outdoor concert event."
    }
  ];
  
  return (
    <section id="requests" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Active Stream Requests</h2>
          <p className="text-muted-foreground">Browse and accept streaming bounties near you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request, index) => (
            <StreamRequest key={index} {...request} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveRequests;
