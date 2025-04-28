
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "AI-Powered Recognition",
    description: "Advanced image processing and material analysis sensors detect and categorize your e-waste automatically."
  },
  {
    title: "Instant Point Rewards",
    description: "Receive eco-points immediately based on the type, quality, and value of deposited items."
  },
  {
    title: "Flexible Redemption",
    description: "Redeem your points for products, discounts, or donate them to environmental causes."
  },
  {
    title: "Real-time Monitoring",
    description: "Our machines notify recycling partners when they're nearing capacity for efficient collection."
  },
  {
    title: "Solar-Powered Operation",
    description: "Machines operate on renewable energy, minimizing their environmental footprint."
  },
  {
    title: "Partner Marketplace",
    description: "Redeem points with our growing network of eco-conscious businesses and local partners."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-eco-gray to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-eco-light-purple text-eco-purple font-medium text-sm mb-4">
            Advanced Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features</h2>
          <p className="text-eco-neutral max-w-2xl mx-auto">
            Our EcoVend machines are equipped with cutting-edge technology to make 
            e-waste recycling efficient, accurate, and rewarding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-eco-gray hover:shadow-md transition-shadow"
            >
              <CheckCircle className="h-8 w-8 text-eco-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-eco-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-eco-purple bg-opacity-10 rounded-xl border border-eco-purple border-opacity-20">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="md:w-3/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Ready to start recycling?</h3>
              <p className="text-eco-neutral">
                Find the nearest EcoVend machine and begin earning rewards today!
              </p>
            </div>
            <div className="md:w-1/4 md:text-right">
              <a 
                href="#" 
                className="inline-block primary-button"
              >
                Find Locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
