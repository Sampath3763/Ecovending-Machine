
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import QRCodeScan from "@/components/QRCodeScan";
import { MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        
        {/* QR Code Simulation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-eco-light-purple text-eco-purple font-medium text-sm mb-4">
                  Try It Now
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Process</h2>
                <p className="text-eco-neutral mb-8">
                  Try our interactive simulation to see how easy it is to recycle your e-waste
                  and earn rewards through our EcoVend machines.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-eco-green text-eco-dark-purple flex items-center justify-center flex-shrink-0 mt-1">1</div>
                    <p>Scan the QR code displayed on the machine</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-eco-green text-eco-dark-purple flex items-center justify-center flex-shrink-0 mt-1">2</div>
                    <p>Select the type of e-waste you're depositing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-eco-green text-eco-dark-purple flex items-center justify-center flex-shrink-0 mt-1">3</div>
                    <p>Follow the on-screen instructions to deposit your item</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-eco-green text-eco-dark-purple flex items-center justify-center flex-shrink-0 mt-1">4</div>
                    <p>Collect your points and redeem them for rewards!</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-eco-gray">
                  <QRCodeScan />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location Section */}
        <section className="py-16 bg-eco-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-eco-green text-eco-dark-purple font-medium text-sm mb-4">
                Find Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">EcoVend Locations</h2>
              <p className="text-eco-neutral max-w-2xl mx-auto">
                Our smart vending machines are located in high-traffic areas 
                for your convenience. Find the nearest one to you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="eco-card p-6">
                <MapPin className="h-8 w-8 text-eco-purple mb-3" />
                <h3 className="text-xl font-semibold mb-2">Central Mall</h3>
                <p className="text-eco-neutral mb-4">Ground Floor, Near Food Court</p>
                <p className="text-sm text-eco-dark-purple mb-2">
                  <span className="font-semibold">Operating Hours:</span> 10:00 AM - 9:00 PM
                </p>
                <Button variant="outline" className="w-full border-eco-purple text-eco-purple hover:bg-eco-purple hover:text-white">
                  Get Directions
                </Button>
              </div>
              
              <div className="eco-card p-6">
                <MapPin className="h-8 w-8 text-eco-purple mb-3" />
                <h3 className="text-xl font-semibold mb-2">University Campus</h3>
                <p className="text-eco-neutral mb-4">Student Union Building, 1st Floor</p>
                <p className="text-sm text-eco-dark-purple mb-2">
                  <span className="font-semibold">Operating Hours:</span> 8:00 AM - 8:00 PM
                </p>
                <Button variant="outline" className="w-full border-eco-purple text-eco-purple hover:bg-eco-purple hover:text-white">
                  Get Directions
                </Button>
              </div>
              
              <div className="eco-card p-6">
                <MapPin className="h-8 w-8 text-eco-purple mb-3" />
                <h3 className="text-xl font-semibold mb-2">Metro Station</h3>
                <p className="text-eco-neutral mb-4">North Exit, Near Ticket Counter</p>
                <p className="text-sm text-eco-dark-purple mb-2">
                  <span className="font-semibold">Operating Hours:</span> 6:00 AM - 10:00 PM
                </p>
                <Button variant="outline" className="w-full border-eco-purple text-eco-purple hover:bg-eco-purple hover:text-white">
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild className="primary-button">
                <Link to="/">View All Locations</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
