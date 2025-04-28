
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QRCodeScan = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (scanning) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setScanning(false);
            navigate("/deposit");
            return 0;
          }
          return prev + 5;
        });
      }, 150);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [scanning, navigate]);

  const handleScan = () => {
    setScanning(true);
    setProgress(0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-8 w-64 h-64 border-4 border-eco-purple rounded-lg overflow-hidden">
        {scanning ? (
          <div className="absolute inset-0 bg-eco-gray flex items-center justify-center">
            <div className="w-3/4 h-3/4 relative">
              <div className="absolute inset-0 border-2 border-eco-purple border-opacity-50"></div>
              <div 
                className="absolute top-0 left-0 right-0 h-0.5 bg-eco-purple animate-pulse"
                style={{
                  transform: `translateY(${progress}%)`,
                  transition: "transform 0.15s linear"
                }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center bg-eco-green bg-opacity-30">
            <QrCode className="h-16 w-16 text-eco-purple mb-4" />
            <p className="text-center text-eco-neutral">Ready to scan</p>
          </div>
        )}
      </div>
      
      {scanning ? (
        <div className="w-64">
          <div className="w-full bg-eco-gray rounded-full h-2.5">
            <div 
              className="bg-eco-purple h-2.5 rounded-full transition-all duration-150 ease-linear" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 text-eco-neutral">Scanning... {progress}%</p>
        </div>
      ) : (
        <Button 
          onClick={handleScan}
          className="primary-button"
        >
          Scan QR Code
        </Button>
      )}
      
      <p className="mt-6 text-center text-eco-neutral max-w-xs">
        In a real machine, you would scan the displayed QR code with your phone camera.
      </p>
    </div>
  );
};

export default QRCodeScan;
