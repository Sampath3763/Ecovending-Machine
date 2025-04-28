
import { Recycle, QrCode, Coins, Store } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: QrCode,
    title: "Scan QR Code",
    description: "Scan the QR code displayed on the EcoVend machine to access the app interface."
  },
  {
    id: 2,
    icon: Recycle,
    title: "Deposit E-Waste",
    description: "Follow the instructions to deposit your electronic waste items in the machine."
  },
  {
    id: 3,
    icon: Coins,
    title: "Earn Points",
    description: "Our AI system evaluates your deposited items and awards eco-points based on value."
  },
  {
    id: 4,
    icon: Store,
    title: "Redeem Rewards",
    description: "Use your accumulated points to redeem rewards from our marketplace partners."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-eco-green text-eco-dark-purple font-medium text-sm mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-eco-neutral max-w-2xl mx-auto">
            Our eco-friendly vending machines make recycling e-waste simple, 
            convenient, and rewarding for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="eco-card p-6">
              <div className="relative mb-6">
                <div className="h-16 w-16 rounded-full bg-eco-green flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-eco-purple" />
                </div>
                <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-eco-purple text-white flex items-center justify-center font-bold text-sm">
                  {step.id}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-eco-neutral">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-eco-neutral mb-6">
            Join thousands of eco-conscious individuals who have already recycled their e-waste!
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-eco-green rounded-lg p-4">
              <p className="text-3xl font-bold text-eco-purple">2,500+</p>
              <p className="text-sm text-eco-neutral">Items Recycled</p>
            </div>
            <div className="bg-eco-green rounded-lg p-4">
              <p className="text-3xl font-bold text-eco-purple">950kg</p>
              <p className="text-sm text-eco-neutral">E-Waste Collected</p>
            </div>
            <div className="bg-eco-green rounded-lg p-4">
              <p className="text-3xl font-bold text-eco-purple">1.2M</p>
              <p className="text-sm text-eco-neutral">Points Awarded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
