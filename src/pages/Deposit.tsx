
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { deviceTypes } from "@/utils/mockData";
import DeviceCard from "@/components/DeviceCard";
import { Button } from "@/components/ui/button";
import { ArrowDown, Check, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Deposit = () => {
  const [selectedDevice, setSelectedDevice] = useState<number | null>(null);
  const [depositStep, setDepositStep] = useState<number>(1);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleDeviceSelect = (deviceId: number) => {
    setSelectedDevice(deviceId);
    setDepositStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDeposit = () => {
    setDepositStep(3);
    setTimeout(() => {
      toast({
        title: "Deposit Successful!",
        description: "Thank you for recycling! Points have been added to your account.",
      });
      setTimeout(() => {
        navigate('/rewards');
      }, 2000);
    }, 3000);
  };
  
  const selectedDeviceData = selectedDevice !== null 
    ? deviceTypes.find(device => device.id === selectedDevice) 
    : null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-eco-gray bg-opacity-30">
        <div className="container mx-auto px-4 py-10">
          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-between mb-2">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${depositStep >= 1 ? 'bg-eco-purple text-white' : 'bg-gray-200 text-gray-400'}`}>
                1
              </div>
              <div className={`h-1 flex-grow mx-2 ${depositStep >= 2 ? 'bg-eco-purple' : 'bg-gray-200'}`}></div>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${depositStep >= 2 ? 'bg-eco-purple text-white' : 'bg-gray-200 text-gray-400'}`}>
                2
              </div>
              <div className={`h-1 flex-grow mx-2 ${depositStep >= 3 ? 'bg-eco-purple' : 'bg-gray-200'}`}></div>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${depositStep >= 3 ? 'bg-eco-purple text-white' : 'bg-gray-200 text-gray-400'}`}>
                3
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-center w-20">Select Device</div>
              <div className="text-center w-20">Confirm</div>
              <div className="text-center w-20">Complete</div>
            </div>
          </div>
          
          {/* Step 1: Select Device */}
          {depositStep === 1 && (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">Select Device Type</h1>
                <p className="text-eco-neutral">Choose the type of e-waste you want to deposit</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deviceTypes.map((device) => (
                  <DeviceCard 
                    key={device.id}
                    {...device}
                    onSelect={() => handleDeviceSelect(device.id)}
                  />
                ))}
              </div>
            </>
          )}
          
          {/* Step 2: Confirm */}
          {depositStep === 2 && selectedDeviceData && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">Confirm Your Deposit</h1>
                <p className="text-eco-neutral">Please verify the details below and follow the instructions</p>
              </div>
              
              <div className="eco-card p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Deposit Details</h2>
                
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-eco-green bg-opacity-30 rounded-lg flex items-center justify-center mr-4">
                    <img src={selectedDeviceData.image} alt={selectedDeviceData.name} className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{selectedDeviceData.name}</h3>
                    <p className="text-eco-neutral">{selectedDeviceData.description}</p>
                    <p className="text-eco-purple font-semibold mt-1">
                      {selectedDeviceData.points} points will be awarded
                    </p>
                  </div>
                </div>
                
                <div className="border border-eco-green rounded-lg p-6 bg-eco-green bg-opacity-10 mb-6">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-eco-purple mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-2">Deposit Instructions:</h4>
                      <ol className="list-decimal ml-5 space-y-2 text-eco-neutral">
                        <li>Ensure your device is removed from any case or protective covering</li>
                        <li>Remove any attached accessories (cables, headphones)</li>
                        <li>If depositing a device with a battery, no need to remove it</li>
                        <li>When the deposit door opens, place your item inside and close it</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setDepositStep(1)}
                    className="border-eco-purple text-eco-purple hover:bg-eco-purple hover:text-white"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleDeposit}
                    className="primary-button"
                  >
                    Proceed to Deposit
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Processing */}
          {depositStep === 3 && (
            <div className="max-w-md mx-auto text-center">
              <div className="eco-card p-8">
                <div className="relative mb-8">
                  <div className="h-24 w-24 mx-auto rounded-full border-4 border-eco-green flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-eco-purple animate-pulse flex items-center justify-center">
                      <ArrowDown className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-eco-green flex items-center justify-center animate-bounce">
                    <Check className="h-6 w-6 text-eco-dark-purple" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Processing Your Deposit</h2>
                <p className="text-eco-neutral mb-6">
                  Our machine is scanning and evaluating your item. Please wait...
                </p>
                
                <div className="h-2 bg-eco-gray rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-eco-purple animate-pulse w-full"></div>
                </div>
                
                <p className="text-sm text-eco-neutral">
                  You'll be redirected to your rewards page once processing is complete
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deposit;
