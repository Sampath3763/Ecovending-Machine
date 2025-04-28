
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { userData } from "@/utils/mockData";
import { Coins, Award, Calendar, MapPin } from "lucide-react";

const Rewards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-eco-gray bg-opacity-30">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2">Your Eco Rewards</h1>
            <p className="text-eco-neutral">Track your deposits and manage your eco-points</p>
          </div>
          
          {/* Points Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="col-span-1 md:col-span-2">
              <div className="eco-card p-6 bg-gradient-to-br from-eco-purple to-eco-blue">
                <div className="flex items-center justify-between text-white mb-4">
                  <h2 className="text-xl font-semibold">Eco-Points Balance</h2>
                  <Coins className="h-6 w-6" />
                </div>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">{userData.points}</span>
                  <span className="ml-2 text-white text-opacity-80">points</span>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <Button asChild className="bg-white text-eco-purple hover:bg-white hover:bg-opacity-90 font-medium">
                    <Link to="/marketplace">Redeem Points</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-20">
                    <Link to="/deposit">Earn More Points</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="eco-card p-6 h-full flex flex-col justify-center">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Environmental Impact</h3>
                  <Award className="h-5 w-5 text-eco-purple" />
                </div>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-eco-neutral">CO₂ Offset</span>
                      <span className="text-sm font-medium">12.5 kg</span>
                    </div>
                    <div className="w-full h-2 bg-eco-gray rounded-full overflow-hidden">
                      <div className="h-full bg-eco-purple" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-eco-neutral">Water Saved</span>
                      <span className="text-sm font-medium">320 L</span>
                    </div>
                    <div className="w-full h-2 bg-eco-gray rounded-full overflow-hidden">
                      <div className="h-full bg-eco-purple" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-eco-neutral">Materials Recovered</span>
                      <span className="text-sm font-medium">0.8 kg</span>
                    </div>
                    <div className="w-full h-2 bg-eco-gray rounded-full overflow-hidden">
                      <div className="h-full bg-eco-purple" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Deposits */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Recent Deposits</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full eco-card">
                <thead>
                  <tr className="bg-eco-green bg-opacity-30">
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Device</th>
                    <th className="py-3 px-4 text-left">Location</th>
                    <th className="py-3 px-4 text-right">Points Earned</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.deposits.map((deposit) => (
                    <tr key={deposit.id} className="border-t border-eco-gray">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-eco-purple mr-2" />
                          <span>{new Date(deposit.date).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{deposit.device}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-eco-purple mr-2" />
                          <span>{deposit.location}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-eco-purple">
                        +{deposit.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {userData.deposits.length > 5 && (
              <div className="text-center mt-6">
                <Button variant="outline" className="border-eco-purple text-eco-purple hover:bg-eco-purple hover:text-white">
                  View All Deposits
                </Button>
              </div>
            )}
          </div>
          
          {/* Reward History */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Reward History</h2>
            
            {userData.redemptions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full eco-card">
                  <thead>
                    <tr className="bg-eco-green bg-opacity-30">
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Reward</th>
                      <th className="py-3 px-4 text-right">Points Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.redemptions.map((redemption) => (
                      <tr key={redemption.id} className="border-t border-eco-gray">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-eco-purple mr-2" />
                            <span>{new Date(redemption.date).toLocaleDateString()}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{redemption.reward}</td>
                        <td className="py-3 px-4 text-right font-medium text-eco-purple">
                          -{redemption.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="eco-card p-8 text-center">
                <Award className="h-12 w-12 text-eco-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Rewards Redeemed Yet</h3>
                <p className="text-eco-neutral mb-6">
                  You haven't redeemed any rewards yet. Visit our marketplace to 
                  explore available rewards you can get with your points.
                </p>
                <Button asChild className="primary-button">
                  <Link to="/marketplace">Browse Marketplace</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
