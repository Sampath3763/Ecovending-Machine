
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { rewards, userData } from "@/utils/mockData";
import RewardCard from "@/components/RewardCard";
import { Coins, Search } from "lucide-react";

const categories = ["All", "Daily Essentials", "Food & Drink", "Clothing", "Entertainment", "Donations", "Education"];

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredRewards = rewards.filter((reward) => {
    const matchesCategory = activeCategory === "All" || reward.category === activeCategory;
    const matchesSearch = reward.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          reward.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          reward.store.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-eco-gray bg-opacity-30">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Eco Reward Marketplace</h1>
            <p className="text-eco-neutral">Redeem your eco-points for exciting rewards</p>
          </div>
          
          {/* Points balance banner */}
          <div className="mb-8 bg-white rounded-lg p-4 shadow-sm border border-eco-gray flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-eco-purple bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Coins className="h-6 w-6 text-eco-purple" />
              </div>
              <div>
                <p className="text-sm text-eco-neutral">Your Balance</p>
                <p className="text-xl font-semibold">{userData.points} <span className="text-eco-purple">points</span></p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-eco-neutral mb-1">Need more points?</p>
              <a href="/deposit" className="text-eco-purple hover:underline font-medium">Deposit E-Waste</a>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search rewards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 rounded-lg border border-eco-gray focus:outline-none focus:ring-2 focus:ring-eco-purple"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-eco-neutral" />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${activeCategory === category 
                      ? 'bg-eco-purple text-white' 
                      : 'bg-white text-eco-neutral hover:bg-eco-gray'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Rewards Grid */}
          {filteredRewards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRewards.map((reward) => (
                <RewardCard key={reward.id} {...reward} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 eco-card">
              <Search className="h-12 w-12 text-eco-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No rewards found</h3>
              <p className="text-eco-neutral">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
