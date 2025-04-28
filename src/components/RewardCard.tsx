
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { userData } from "@/utils/mockData";

type RewardCardProps = {
  id: number;
  name: string;
  points: number;
  category: string;
  image: string;
  store: string;
  description: string;
};

const RewardCard = ({ id, name, points, category, image, store, description }: RewardCardProps) => {
  const { toast } = useToast();
  
  const handleRedeem = () => {
    if (userData.points >= points) {
      toast({
        title: "Reward Redeemed!",
        description: `You've successfully redeemed ${name}`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Not enough points",
        description: `You need ${points - userData.points} more points for this reward`,
      });
    }
  };
  
  return (
    <div className="eco-card">
      <div className="aspect-video relative">
        <div className="absolute top-2 right-2 bg-eco-purple text-white text-xs font-semibold py-1 px-2 rounded-full">
          {points} Points
        </div>
        <div className="h-full w-full bg-eco-gray bg-opacity-30 flex items-center justify-center">
          <img src={image} alt={name} className="max-h-full max-w-full object-cover" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-xs bg-eco-green py-1 px-2 rounded-full text-eco-dark-purple">
            {category}
          </span>
        </div>
        <p className="text-eco-neutral text-sm mb-2">{description}</p>
        <div className="text-sm text-eco-neutral mb-3">
          From: <span className="font-medium text-eco-dark-purple">{store}</span>
        </div>
        <Button 
          onClick={handleRedeem}
          className={`w-full ${userData.points >= points ? 'primary-button' : 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed'}`}
          disabled={userData.points < points}
        >
          {userData.points >= points ? 'Redeem Reward' : `Need ${points - userData.points} more points`}
        </Button>
      </div>
    </div>
  );
};

export default RewardCard;
