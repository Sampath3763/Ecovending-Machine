
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type DeviceCardProps = {
  id: number;
  name: string;
  points: number;
  description: string;
  image: string;
  examples: string[];
  onSelect: () => void;
};

const DeviceCard = ({ id, name, points, description, image, examples, onSelect }: DeviceCardProps) => {
  const [showExamples, setShowExamples] = useState(false);
  const { toast } = useToast();
  
  const handleSelect = () => {
    toast({
      title: "Device selected!",
      description: `You've selected ${name} for recycling`,
    });
    onSelect();
  };
  
  return (
    <div className="eco-card relative">
      <div className="relative p-4">
        <div className="aspect-square rounded-lg bg-eco-green bg-opacity-30 flex items-center justify-center mb-4">
          <img src={image} alt={name} className="w-24 h-24" />
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-eco-neutral text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-eco-purple font-semibold">
            {points} points
          </span>
          <button 
            onClick={() => setShowExamples(!showExamples)}
            className="text-sm text-eco-blue hover:underline"
          >
            {showExamples ? "Hide examples" : "Show examples"}
          </button>
        </div>
        
        {showExamples && (
          <div className="mt-3 p-2 bg-eco-gray bg-opacity-30 rounded-md">
            <p className="text-sm font-medium mb-1">Examples:</p>
            <ul className="text-sm text-eco-neutral">
              {examples.map((example, index) => (
                <li key={index} className="mb-1 last:mb-0">• {example}</li>
              ))}
            </ul>
          </div>
        )}
        
        <Button 
          onClick={handleSelect} 
          className="mt-4 w-full primary-button"
        >
          Select for Deposit
        </Button>
      </div>
    </div>
  );
};

export default DeviceCard;
