import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Recycle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-eco-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-eco-green text-eco-dark-purple font-medium text-sm mb-4">
              Eco-Friendly Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Recycle E-Waste, <br />
              <span className="text-eco-purple">Earn Rewards</span>
            </h1>
            <p className="text-lg text-eco-neutral mb-8 max-w-xl">
              Our smart vending machines make it easy to dispose of electronic waste responsibly
              while earning points for exciting rewards and helping the environment.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="primary-button">
                <Link to="/deposit">Deposit E-Waste</Link>
              </Button>
              <Button asChild variant="outline" className="border-eco-purple text-eco-purple hover:bg-eco-purple hover:text-white">
                <Link to="/rewards">View Rewards</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-eco-purple to-eco-blue p-1">
                <div className="h-full w-full rounded-lg bg-white p-4">
                  <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-md border-2 border-dashed border-eco-gray bg-eco-green bg-opacity-30 p-6">
                    <div className="h-24 w-24 rounded-full bg-eco-purple flex items-center justify-center">
                      <Recycle className="h-12 w-12 text-white animate-pulse-slow" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-eco-dark-purple">EcoVend Machine</h3>
                      <p className="text-eco-neutral">Scan QR Code to Begin</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-eco-green animate-float"></div>
              <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-eco-light-purple animate-float" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-eco-neutral" />
      </div>
    </section>
  );
};

export default Hero;
