
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-eco-gray shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-eco-purple" />
            <span className="font-bold text-lg text-eco-dark-purple">EcoReward</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-eco-neutral hover:text-eco-purple transition-colors">
              Home
            </Link>
            <Link to="/deposit" className="text-eco-neutral hover:text-eco-purple transition-colors">
              Deposit
            </Link>
            <Link to="/rewards" className="text-eco-neutral hover:text-eco-purple transition-colors">
              Rewards
            </Link>
            <Link to="/marketplace" className="text-eco-neutral hover:text-eco-purple transition-colors">
              Marketplace
            </Link>
            <Button className="primary-button">Login</Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-eco-dark-purple"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link 
              to="/" 
              className="block text-eco-neutral hover:text-eco-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/deposit" 
              className="block text-eco-neutral hover:text-eco-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Deposit
            </Link>
            <Link 
              to="/rewards" 
              className="block text-eco-neutral hover:text-eco-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Rewards
            </Link>
            <Link 
              to="/marketplace" 
              className="block text-eco-neutral hover:text-eco-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Marketplace
            </Link>
            <Button 
              className="w-full primary-button"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
